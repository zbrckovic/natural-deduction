export const ErrorCode = {
  VARIABLE_COLLISION: 0
}

/**
 * The main error creating function for the whole library.
 */
export function createError (code, message) {
  const error = new Error(`ERR(${code}): ${message}`)
  error.code = code
  return error
}

/**
 * Creates a regex which tests use to assert whether a specific error was thrown.
 */
export function createErrorRegexForTest (code) {
  return new RegExp(`^ERR\\(${code}\\)`)
}
