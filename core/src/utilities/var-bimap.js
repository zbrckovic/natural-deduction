import { createBimap } from './bimap'

/** Like normal bimap, but works with variables and uses bimap internally with their ids. */
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
  get (keyVar) {
    const valueVarId = this._bimap.get(keyVar.id())
    return valueVarId !== undefined ? this._variables[valueVarId] : undefined
  },
  set (keyVar, valueVar) {
    const removedValueVarId = this._bimap.set(keyVar.id(), valueVar.id())
    const removedValueVar = removedValueVarId !== undefined
      ? this._variables[removedValueVarId]
      : undefined

    if (removedValueVar !== undefined) {
      // removedValueVar is no longer among values
      if (!this.has(removedValueVar)) {
        // removedValueVar is not among keys either, so it can be removed from variables store
        delete this._variables[removedValueVar.id()]
      }
    }
    this._variables[keyVar.id()] = keyVar
    this._variables[valueVar.id()] = valueVar

    return removedValueVar
  },
  has (keyVar) {
    return this._bimap.has(keyVar.id())
  },
  remove (keyVar) {
    const removedValueVarId = this._bimap.remove(keyVar.id())
    const removedValueVar = removedValueVarId !== undefined
      ? this._variables[removedValueVarId]
      : undefined

    if (!this.inverse().has(keyVar)) {
      delete this._variables[keyVar.id()]
    }

    if (removedValueVar !== undefined && !this.has(removedValueVar)) {
      delete this._variables[removedValueVar.id()]
    }

    return removedValueVar
  },
  inverse () {
    const result = createVarBimap()
    result._bimap = this._bimap.inverse()
    result._variables = this._variables
    return result
  }
}
