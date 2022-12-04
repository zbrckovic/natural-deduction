/**
 * Variable
 * @param id - The unique identifier of this variable inside some context.
 * @param arity - The number of terms required to form an expression.
 * @constructor
 */
function Var ({ id, arity = 0 }) {
  this.id = id
  this.arity = arity
}

Object.assign(Var.prototype, {
  toString () {
    return this.id
  },
  /**
   * Creates a copy of this variable with specified changes.
   */
  with (changes = {}) {
    return new this.constructor({ ...this, ...changes })
  }
})
