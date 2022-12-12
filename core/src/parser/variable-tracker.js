import { equals } from '../utilities'
import { error, ErrorCode } from '../errors'

/**
 * Tracks variables and takes care not to allow registration of conflicting variables: unequal
 * variables with the same id.
 */
export class VariableTracker {
  idToVar = {}

  register (variable) {
    const existingVariable = this.idToVar[variable.id]

    if (existingVariable === undefined) {
      this.idToVar[variable.id] = variable
    } else {
      if (!equals(existingVariable, variable)) {
        throw error(
          ErrorCode.VARIABLE_COLLISION,
          `Cannot register variable ${variable} as it has the same id as already registered ` +
          `variable ${existingVariable}`)
      }
    }
  }
}
