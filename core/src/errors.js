export const ErrorCode = {
  VARIABLE_COLLISION: 0
}

/**
 * Creates an error object.
 *
 * This is the main error creating function of the whole library.
 */
export function error (code, message) {
  const error = new Error(`ERR(${code}): ${message}`)
  error.code = code
  return error
}

/** Creates a regex which unit tests use to assert whether a specific error has been thrown. */
export function errorRegexForTest (code) {
  return new RegExp(`^ERR\\(${code}\\)`)
}
