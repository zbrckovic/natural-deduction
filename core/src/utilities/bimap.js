/**
 * Creates a bidirectional map which maintains a bijection between keys and values.
 * Keys and values must be strings.
 */
export function createBimap () {
  const that = Object.create(bimapTrait)
  that._leftToRight = {}
  that._rightToLeft = {}
  return that
}

const bimapTrait = {
  get (key) {
    return this._leftToRight[key]
  },
  /**
   * Inserts the key-value pair and returns the removed value if there is one (in case the key was
   * already associated to some different value.
   */
  set (key, value) {
    const oldKey = this._rightToLeft[value]
    if (oldKey !== undefined) {
      // The value already exists
      if (oldKey !== key) {
        // The value is already associated with some other key
        throw createDuplicateValuesError(oldKey, value)
      } else {
        // The value is already associated with this key so there's nothing left to do
      }
    } else {
      // The value is new
      const oldValue = this._leftToRight[key]
      if (oldValue !== undefined) {
        // The key is already associated with some other value. Remove it!
        delete this._rightToLeft[oldValue]
      }
      this._leftToRight[key] = value
      this._rightToLeft[value] = key

      return oldValue
    }
  },
  has (key) {
    return this._leftToRight[key] !== undefined
  },
  /**
   * Returns the inverted view of the map. State of the return map is shared with the original.
   */
  inverse () {
    const result = createBimap()
    result._leftToRight = this._rightToLeft
    result._rightToLeft = this._leftToRight
    return result
  }
}

const DUPLICATE_VALUES_ERROR = Symbol('DUPLICATE_VALUES_ERROR')

function createDuplicateValuesError (key, value) {
  const error = new Error(`Value ${value} is already associated with key ${key}`)
  error[DUPLICATE_VALUES_ERROR] = true
  return error
}

export function isBimapDuplicateValuesError (error) {
  return Object.hasOwnProperty.call(error, DUPLICATE_VALUES_ERROR)
}
