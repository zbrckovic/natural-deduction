export function createPredVarsSubstitutionVisitor (...substitutions) {
  const that = Object.create(predVarsSubstitutionTrait)
  that._substitutions = substitutions
  return that
}

const predVarsSubstitutionTrait = {}

export function createSubstituteTemplate (formula, placeholders) {
}

/** When free variable of a substitute becomes bound. */
export class SubstituteBecomesBound extends Error {
  constructor () {
    super('substitute becomes bound')
  }
}

/** When substitute binds an external individual variable. */
export class SubstituteBindsExternalIndVarException extends Error {
  constructor () {
    super('substitute binds external individual variable')
  }
}
