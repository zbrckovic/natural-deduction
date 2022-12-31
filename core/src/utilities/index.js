export { equals } from './equals'
export { createBimap, DuplicateValuesError } from './bimap'
export { createVarBimap } from './var-bimap'

/* Checks whether all items are unique. */
export function areUnique (...items) {
  const uniqueItems = new Set()
  for (const item of items) {
    if (uniqueItems.has(item)) return false
    uniqueItems.add(item)
  }
  return true
}
