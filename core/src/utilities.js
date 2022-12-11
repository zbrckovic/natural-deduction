import isEqualWith from 'lodash.isequalwith'

export function equals (value1, value2) {
  return isEqualWith(value1, value2, (v1, v2) => {
    if (typeof v1 === 'object' && typeof v2 === 'object') {
      if (typeof v1.equals === 'function') {
        return v1.equals(v2)
      }
    }
  })
}
