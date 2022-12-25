import { createVarBimap, equals } from '../../utilities'

/**
 * Creates an expression visitor which checks whether this and other expression are isomorphic.
 * @param formula - The reference formula which will be checked for isomorphism against the visited
 * formula. Isomorphism is a symmetric relation, so it is not important which formula is the
 * reference formula and which is the visited one.
 */
export function createIsomorphismCheckingVisitor (formula) {
  const that = Object.create(isomorphismCheckingVisitorTrait)

  /**
   * A stack whose head is the reference expression against which visited one is checked for
   * isomorphism.
   */
  that._refExpressionStack = [formula]

  /** Bijection between reference formula variables and visited formula variables. */
  that._bimap = createVarBimap()

  return that
}

const isomorphismCheckingVisitorTrait = {
  visitAtomicFormula: function (formula) {
    const refFormula = this.refExpression()

    if (refFormula.type() !== formula.type()) return false
    if (refFormula.arity() !== formula.arity()) return false

    try {
      this.registerMapping(refFormula.predVar(), formula.predVar())
    } catch (error) {
      if (isAssociationError(error)) return false
      throw error
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

    if (refTerm.type() !== term.type()) return false
    if (refTerm.arity() !== term.arity()) return false

    try {
      this.registerMapping(refTerm.termVar(), term.termVar())
    } catch (error) {
      if (isAssociationError(error)) return false
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
  visitBinaryFormula (formula) {
    const refFormula = this.refExpression()

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

    if (refFormula.type() !== formula.type()) return false
    if (refFormula.quantifier() !== formula.quantifier()) return false

    // reference individual variable
    const refIndVar = refFormula.indVar()

    // visited individual variable
    const visIndVar = formula.indVar()

    // Delete previous mappings temporarily before visiting descendants because the binding shadows
    // those individual variables in both formulas.
    // TODO: Finish this
  },
  /**
   * Executes the action in the context of reference expression as head of the stack.
   * @private
   */
  doWithRefExpression (refExpression, action) {
    this._refExpressionStack.push(refExpression)
    const result = action()
    this._refExpressionStack.pop()
    return result
  },
  /**
   * Returns the head of the reference expression stack.
   * @private
   */
  refExpression () {
    return this._refExpressionStack[this._refExpressionStack.length - 1]
  },
  /**
   * Adds the mapping between reference and visited variable and raises exception in case of
   * conflict.
   * @private
   */
  registerMapping (refVar, visVar) {
    const prevVisVar = this._bimap.get(refVar)
    if (prevVisVar !== undefined && !equals(prevVisVar, visVar)) {
      // Reference variable has already been associated to some other variable
      throw createAssociationError(refVar, visVar, prevVisVar)
    }
    this._bimap.set(refVar, visVar)
  }
}

const {
  createAssociationError,
  isAssociationError
} = (() => {
  const ASSOCIATION_ERROR = Symbol('ASSOCIATION ERROR')

  const createAssociationError = function (refVar, visVar, prevVisVar) {
    const result = new Error(
      `Attempted to associate ${refVar} to ${visVar} while ${refVar} has ` +
      `already been associated to ${prevVisVar}.`
    )
    result[ASSOCIATION_ERROR] = true
    return result
  }

  function isAssociationError (error) {
    return error[ASSOCIATION_ERROR] === true
  }

  return { createAssociationError, isAssociationError }
})()
