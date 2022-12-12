import { equals } from '../src/utilities'

expect.extend({
  /** Equality checking matcher which takes into account existence of `equals` methods. */
  toDeepEqual (actual, expected) {
    return {
      pass: equals(actual, expected),
      message () {
        const actualJSON = JSON.stringify(actual)
        const expectedJSON = JSON.stringify(expected)
        return `expected\n${actualJSON}\nto be deep-equal to\n${expectedJSON}\n.`
      }
    }
  }
})
