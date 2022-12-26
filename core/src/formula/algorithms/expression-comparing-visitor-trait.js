export const expressionComparingVisitorTrait = {
  /** Executes the action in the context of reference expression as head of the stack. */
  doWithRefExpression (refExpression, action) {
    this._refExpressionStack.push(refExpression)
    const result = action()
    this._refExpressionStack.pop()
    return result
  },
  /** Returns the head of the reference expression stack. */
  refExpression () {
    return this._refExpressionStack[this._refExpressionStack.length - 1]
  }
}
