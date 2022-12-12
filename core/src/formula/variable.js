const varBehavior = {
  toString () {
    return this.id
  }
}

/**
 * Variable
 *
 * It represents either a term variable or a predicate variable.
 * @param id - The unique identifier of this variable inside some context.
 * @param arity - The number of terms required to form an expression (term).
 */
export function variable (id, arity = 0) {
  const result = Object.create(varBehavior)
  Object.assign(result, { id, arity })
  return Object.freeze(result)
}
