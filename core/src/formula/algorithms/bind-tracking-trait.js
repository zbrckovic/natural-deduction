/**
 * Provides an expression visitor the ability to track which variables are bound.
 */
export const bindTrackingTrait = {
  /**
   * Executes the action in the context where the provided individual variable is bound.
   * @param indVar - The individual variable to mark as bound.
   * @param action - The action to execute.
   */
  doWithBoundIndVar (indVar, action) {
    this.registerBinding(indVar)
    const result = action(indVar)
    this.unregisterBinding(indVar)
    return result
  },
  /** @private */
  registerBinding (indVar) {
    this._boundVars[indVar.id()] = this.numberOfBindingQuantifiers(indVar) + 1
  },
  /** @private */
  unregisterBinding (indVar) {
    this._boundVars[indVar.id()] = this.numberOfBindingQuantifiers(indVar) - 1
  },
  /** @private */
  isBound (indVar) {
    return this.numberOfBindingQuantifiers(indVar) > 0
  },
  /**
   * Returns the number of ancestors whose quantifiers have this variable as the bound variable
   * (In case there are more than 1, all except the closest ancestor are binding vacuously).
   * @private
   */
  numberOfBindingQuantifiers (indVar) {
    return this._boundVars[indVar.id()] ?? 0
  }
}
