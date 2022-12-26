/**
 * Creates a bidirectional map which maintains a bijection between keys and values. Keys and values
 * must be strings.
 * @throws {DuplicateValuesError}
 */
export function createBimap () {
  const that = Object.create(bimapTrait)
  that._leftToRight = {}
  that._rightToLeft = {}
  return that
}

const bimapTrait = {
  /** Returns the value associated to the provided key. */
  get (key) {
    return this._leftToRight[key]
  },
  /**
   * Inserts the key-value pair and returns the removed value if there is one (in case the key was
   * already associated to some different value).
   */
  set (key, value) {
    const oldKey = this._rightToLeft[value]
    if (oldKey !== undefined) {
      // The value already exists.
      if (oldKey !== key) {
        // The value is already associated with some other key.
        throw new DuplicateValuesError(oldKey, value)
      } else {
        // The value is already associated with this key so there's nothing left to do.
      }
    } else {
      // The value is new.
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
   * Removes the key and the associated value. It returns the removed value if one has actually
   * been removed.
   */
  remove (key) {
    const value = this._leftToRight[key]
    delete this._leftToRight[key]
    if (value !== undefined) {
      delete this._rightToLeft[value]
    }
    return value
  },
  /** Returns the inverted view of the map. State of the return map is shared with the original. */
  inverse () {
    const result = createBimap()
    result._leftToRight = this._rightToLeft
    result._rightToLeft = this._leftToRight
    return result
  }
}

export class DuplicateValuesError extends Error {
  constructor (key, value) {
    super(`value ${value} already associated with key ${key}`)
    this.key = key
    this.value = value
  }
}
