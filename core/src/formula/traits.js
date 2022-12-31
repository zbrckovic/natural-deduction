import { createSubformulaFinderVisitor } from './algorithms/subexpression-finder-visitor'
import { createFreeIndVarsFinderVisitor } from './algorithms/free-ind-vars-finder-visitor'
import {
  createFreeIndVarsSubstitutionVisitor
} from './algorithms/free-ind-vars-substitution-visitor'
import { BinaryOperator } from './structures/symbols'
import { createExpressionTypeVisitor } from './algorithms/expression-type-visitor'
import { equals } from '../utilities'
import { createIsomorphismCheckingVisitor } from './algorithms/isomorphism-checking-visitor'
import {
  createFreeIndVarSubstitutionFinderVisitor, FreeIndVarSubstitutionFinderVisitorError
} from './algorithms/free-ind-var-substitution-finder-visitor'
import { createPredVarsSubstitutionVisitor } from './algorithms/pred-var-substitution-visitor'

export const expressionTrait = {
  /** Returns an enum value representing the type of expression. */
  type () {
    const visitor = createExpressionTypeVisitor()
    return this.accept(visitor)
  },
  /**
   * Finds a subexpression by following the path.
   * @param path - The list of indices where each index represents the direction to take at the
   * point of branching.
   */
  get (...path) {
    const visitor = createSubformulaFinderVisitor(path)
    return this.accept(visitor)
  },
  /** Finds free individual variables and returns them as a map (variables by ids). */
  findFreeIndVars () {
    const visitor = createFreeIndVarsFinderVisitor()
    return this.accept(visitor)
  },
  /** Substitutes individual variables with individual variables. */
  substituteFreeIndVars (substitutions) {
    const visitor = createFreeIndVarsSubstitutionVisitor(substitutions)
    return this.accept(visitor)
  },
  isIsomorphicTo (other) {
    const visitor = createIsomorphismCheckingVisitor(other)
    return this.accept(visitor)
  },
  /**
   * Finds a substitution of free individual variable which would turn `this` into `expression`. If
   * expressions are the same it returns `undefined` since no substitution is necessary.
   * @throws Throws an error if expressions are not the same and such substitution is not possible.
   */
  findFreeIndVarSubstitution (formula) {
    const visitor = createFreeIndVarSubstitutionFinderVisitor(this)
    try {
      formula.accept(visitor)
    } catch (error) {
      if (error instanceof FreeIndVarSubstitutionFinderVisitorError) {
        return undefined
      } else {
        throw error
      }
    }
    return visitor.result()
  },
  substitutePredVars (...substitutions) {
    const visitor = createPredVarsSubstitutionVisitor(...substitutions)
    return this.accept(visitor)
  },
  /**
   * Compares two expression for equality.
   * @param other - Must be an expression.
   */
  equals (other) {
    return this.type() === other.type() && equals({ ...this }, { ...other })
  }
}

export const formulaTrait = {
  ...expressionTrait,

  /** Creates a conjunctive formula. */
  and (formula) {
    return forwardRef.createBinaryFormula(BinaryOperator.CONJUNCTION, this, formula)
  },

  /** Creates a disjunctive formula. */
  or (formula) {
    return forwardRef.createBinaryFormula(BinaryOperator.DISJUNCTION, this, formula)
  },

  /** Creates a conditional formula. */
  then (formula) {
    return forwardRef.createBinaryFormula(BinaryOperator.CONDITIONAL, this, formula)
  },

  /** Creates a biconditional formula. */
  onlyThen (formula) {
    return forwardRef.createBinaryFormula(BinaryOperator.BICONDITIONAL, this, formula)
  }
}

// Avoiding circular imports
export const forwardRef = {
  createBinaryFormula: undefined
}
