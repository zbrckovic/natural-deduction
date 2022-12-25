import { createBimap } from './bimap'

/** Like normal bimap, but works with variables uses bimap internally with their ids. */
export function createVarBimap () {
  const that = Object.create(varBimapTrait)

  /** Bijection between variable ids. */
  that._bimap = createBimap()

  /**
   * Map between variable ids and variables. This is a storage for all real variable objects whose
   * ids exist in bimap either as keys or as values.
   */
  that._variables = {}

  return that
}

const varBimapTrait = {
  get (variable) {
    const id = this._bimap.get(variable)
    return id !== undefined ? this._variables[id] : undefined
  },
  set (keyVariable, valueVariable) {
    const removedId = this._bimap.set(keyVariable.id(), valueVariable.id())
    if (removedId !== undefined) {
      delete this._variables[removedId]
    }
    this._variables[keyVariable.id()] = keyVariable
    this._variables[valueVariable.id()] = valueVariable
  },
  has (keyVariable) {
    return this._bimap.has(keyVariable.id())
  },
  remove (keyVariable) {
    const removedVariableId = this._bimap.remove(keyVariable.id())
    const removedVariable = removedVariableId !== undefined
      ? this._variables[removedVariableId]
      : undefined

    const keyVariableIsAmongValues = this.inverse().has(keyVariable)
    if (!keyVariableIsAmongValues) {
      delete this._variables[keyVariable.id()]
    }

    if (removedVariable !== undefined && !this.has(removedVariable)) {
      delete this._variables[removedVariableId]
    }
  },
  inverse () {
    const result = createVarBimap()
    result._bimap = this._bimap.inverse()
    result._variables = this._variables
    return result
  }
}
