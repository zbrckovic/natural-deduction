export class VariableBecomesIllegallyBoundError extends Error {
  constructor () {
    super('variable becomes illegally bound')
  }
}

export class InvalidArityError extends Error {
  constructor () {
    super('invalid arity')
  }
}

export class VariableCollisionError extends Error {
  constructor (variable, existingVariable) {
    super(
      `cannot register variable ${variable} as it has the same id as already registered ` +
      `variable ${existingVariable}`
    )
  }
}
