const variableTrait = {
  id () {
    return this._id
  },
  arity () {
    return this._arity
  },
  toString () {
    return this._id
  }
}

/**
 * Creates a variable.
 *
 * It can be either a term variable (individual or functional variable) or a predicate variable.
 * @param id - The unique identifier of this variable inside some context.
 * @param arity - The number of terms required to form an expression (term).
 */
export function variable (id, arity = 0) {
  const result = Object.create(variableTrait)
  Object.assign(result, { _id: id, _arity: arity })
  return result
}
