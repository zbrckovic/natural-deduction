import { equals } from '../utilities'
import { createError, ErrorCode } from '../errors'

/**
 * Tracks variables and takes care not to allow registration of conflicting variables: unequal
 * variables with the same id.
 */
export class VariableTracker {
  _idToVar = {}

  get (id) {
    return this._idToVar[id]
  }

  register (variable) {
    const existingVariable = this._idToVar[variable.id()]

    if (existingVariable === undefined) {
      this._idToVar[variable.id()] = variable
    } else {
      if (!equals(existingVariable, variable)) {
        throw createError(
          ErrorCode.VARIABLE_COLLISION,
          `cannot register variable ${variable} as it has the same id as already registered ` +
          `variable ${existingVariable}`)
      }
    }
  }
}
