export const ErrorCode = {
  VARIABLE_COLLISION: 0,
  INVALID_ARITY: 1
}

/**
 * This is the main error creating function of the whole library.
 */
export function createError (code, message) {
  const error = new Error(`ERR(${code}): ${message}`)
  error.code = code
  return error
}

/** Creates a regex which unit tests use to assert whether a specific error has been thrown. */
export function createErrorRegexForTest (code) {
  return new RegExp(`^ERR\\(${code}\\)`)
}
