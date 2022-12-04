/**
 * Variable
 * @param id - The unique identifier of this variable inside some context.
 * @constructor
 */
function Var({id}) {
    this.id = id
}

Object.assign(Var.prototype, {
    toString() {
        return this.id
    },
    /**
     * Creates a copy of this variable with specified changes.
     */
    with(changes = {}) {
        return new this.constructor({...this, ...changes})
    }
})


/**
 * Individual variable
 * @constructor
 */
function IndVar({id}) {
    Var.call(this, {id})
}

Object.assign(IndVar.prototype, Var.prototype)


/**
 * Predicate variable
 * @property arity - The number of terms required to form an atomic variable
 * with this predicate variable. When `arity` is zero, the predicate variable is
 * actually a "propositional variable" - it can stand on its own to form an
 * atomic formula.
 * @constructor
 */
function PredVar({id, arity = 0} = {}) {
    Var.call(this, {id})
    this.arity = arity
}

Object.assign(PredVar.prototype, Var.prototype)
