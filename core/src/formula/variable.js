/**
 * Variable
 *
 * It represents either term variable or predicate variable.
 * @param id - The unique identifier of this variable inside some context.
 * @param arity - The number of terms required to form an expression.
 * @constructor
 */
export function Var ({ id, arity = 0 }) {
  this.id = id
  this.arity = arity
}

Object.assign(Var.prototype, {
  toString () {
    return this.id
  }
})
