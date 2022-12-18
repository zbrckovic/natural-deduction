export const bindTrackingTrait = {
  /**
   * Executes the action in the context where the provided individual variable is bound.
   * @param indVar - The individual variable to bind.
   * @param action - The action to execute.
   */
  doWithBoundIndVar (indVar, action) {
    this._registerBinding(indVar)
    const result = action(indVar)
    this._unregisterBinding(indVar)
    return result
  },
  _registerBinding (indVar) {
    this._boundVars[indVar.id()] = this._numberOfBinds(indVar) + 1
  },
  _unregisterBinding (indVar) {
    this._boundVars[indVar.id()] = this._numberOfBinds(indVar) - 1
  },
  _isBound (indVar) {
    return this._numberOfBinds(indVar) > 0
  },
  _numberOfBinds (indVar) {
    return this._boundVars[indVar.id()] ?? 0
  }
}
