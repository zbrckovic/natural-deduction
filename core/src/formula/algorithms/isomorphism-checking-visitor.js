import { DuplicateValuesError, createVarBimap, equals } from '../../utilities'
import { formulaComparingVisitorTrait } from './formula-comparing-visitor-trait'

/**
 * Creates an expression visitor which checks whether this and other expression are isomorphic.
 * @param expression - The reference expression which will be checked for isomorphism against the
 * visited one. Isomorphism is a symmetric relation, so it is not important which expression is the
 * reference expression and which is the visited one.
 */
export function createIsomorphismCheckingVisitor (expression) {
  const that = Object.create(isomorphismCheckingVisitorTrait)

  /**
   * A stack whose head is the reference expression against which visited one is checked for
   * isomorphism.
   */
  that._refExpressionStack = [expression]

  /** Bijection between reference expression variables and visited expression variables. */
  that._bimap = createVarBimap()

  return that
}

const isomorphismCheckingVisitorTrait = {
  ...formulaComparingVisitorTrait,
  visitBinaryFormula (formula) {
    const refFormula = this.refExpression()

    // Confirm that expressions are comparable.
    if (refFormula.type() !== formula.type()) return false
    if (refFormula.operator() !== formula.operator()) return false

    return (
      this.doWithRefExpression(refFormula.lFormula(), () => formula.lFormula().accept(this)) &&
      this.doWithRefExpression(refFormula.rFormula(), () => formula.rFormula().accept(this))
    )
  },
  visitUnaryFormula (formula) {
    const refFormula = this.refExpression()

    if (refFormula.type() !== formula.type()) return false
    if (refFormula.operator() !== formula.operator()) return false

    return this.doWithRefExpression(refFormula.formula(), () => formula.formula().accept(this))
  },
  visitQuantifiedFormula (formula) {
    const refFormula = this.refExpression()

    // Confirm that expressions are comparable.
    if (refFormula.type() !== formula.type()) return false
    if (refFormula.quantifier() !== formula.quantifier()) return false

    // reference individual variable
    const refIndVar = refFormula.indVar()

    // visited individual variable
    const visIndVar = formula.indVar()

    // Delete previous mappings temporarily before visiting descendants because the binding shadows
    // those individual variables in both formulas.
    const prevVisIndVar = this._bimap.remove(refIndVar)
    const prevRefIndVar = this._bimap.inverse().remove(visIndVar)

    try {
      // Add temporary mapping for current binding individual variable.
      this.registerMapping(refIndVar, formula.indVar())

      const isIsomorphic = this.doWithRefExpression(refFormula.formula(), () => {
        return formula.formula().accept(this)
      })

      if (!isIsomorphic) return false

      // Remove temporary mapping for current binding individual variable.
      this.unregisterMapping(refIndVar)

      // Return previously deleted mappings.
      if (prevVisIndVar !== undefined) {
        this.registerMapping(refIndVar, prevVisIndVar)
      }
      if (prevRefIndVar !== undefined) {
        this.registerMapping(prevRefIndVar, visIndVar)
      }
    } catch (error) {
      if (error instanceof AssociationError) {
        return false
      } else {
        throw error
      }
    }
    return true
  },
  visitAtomicFormula (formula) {
    const refFormula = this.refExpression()

    // Confirm that expressions are comparable.
    if (refFormula.type() !== formula.type()) return false
    if (refFormula.arity() !== formula.arity()) return false

    try {
      this.registerMapping(refFormula.predVar(), formula.predVar())
    } catch (error) {
      if (error instanceof AssociationError || error instanceof DuplicateValuesError) {
        return false
      } else {
        throw error
      }
    }

    return refFormula
      .terms()
      .every((refTerm, i) => {
        const visTerm = formula.terms()[i]
        return this.doWithRefExpression(
          refTerm,
          () => visTerm.accept(this))
      })
  },
  visitTerm (term) {
    const refTerm = this.refExpression()

    // Confirm that expressions are comparable.
    if (refTerm.type() !== term.type()) return false
    if (refTerm.arity() !== term.arity()) return false

    try {
      this.registerMapping(refTerm.termVar(), term.termVar())
    } catch (error) {
      if (error instanceof AssociationError) return false
      throw error
    }

    return refTerm
      .terms()
      .every((refTerm, i) => {
        const visTerm = term.terms()[i]
        return this.doWithRefExpression(
          refTerm,
          () => visTerm.accept(this))
      })
  },
  /**
   * Adds the mapping between reference and visited variable.
   * @private
   * @throws Throws an error in case of variable conflict.
   */
  registerMapping (refVar, visVar) {
    const prevVisVar = this._bimap.get(refVar)
    if (prevVisVar !== undefined && !equals(prevVisVar, visVar)) {
      // Reference variable has already been associated to some other variable.
      throw new AssociationError(refVar, visVar, prevVisVar)
    } else {
      this._bimap.set(refVar, visVar)
    }
  },
  /** @private */
  unregisterMapping (refVar) {
    this._bimap.remove(refVar)
  }
}

class AssociationError extends Error {
  constructor (refVar, visVar, prevVisVar) {
    super(
      `attempted to associate ${refVar} to ${visVar} while ${refVar} has ` +
      `already been associated to ${prevVisVar}.`
    )
    this.refVar = refVar
    this.visVar = visVar
    this.prevVisVar = prevVisVar
  }
}
