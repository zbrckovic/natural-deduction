import { createBimap } from '../src/utils/map'

describe('bimap', () => {
  let map
  beforeEach(() => {
    map = createBimap()
  })

  describe('has()', () => {
    it('returns true only for existing keys', () => {
      map.set('x', 'y')
      expect(map.has('x')).toBe(true)
      expect(map.has('y')).toBe(false)
    })
  })

  it('remembers inserted key-value pair', () => {
    map.set('x', 'y')
    expect(map.get('x')).toBe('y')
  })

  it('allows overwriting the key', () => {
    map.set('x', 'y')
    map.set('x', 'z')
    expect(map.get('x')).toBe('z')
  })

  it('allows inserting the same pair twice', () => {
    map.set('x', 'y')
    expect(() => {
      map.set('x', 'y')
    }).not.toThrow()
  })

  it('throws for value duplication', () => {
    map.set('x', 'y')
    expect(() => {
      map.set('x2', 'y')
    }).toThrow()
  })

  describe('inverse()', () => {
    it('returns an inverted map', () => {
      map.set('x', 'y')
      map.set('a', 'b')
      const inverseMap = map.inverse()
      expect(inverseMap.get('y')).toBe('x')
      expect(inverseMap.get('b')).toBe('a')
      expect(inverseMap.has('x')).toBe(false)
      expect(inverseMap.has('a')).toBe(false)
    })

    it('returns a map which shares state with the original', () => {
      map.set('x', 'y')
      const inverseMap = map.inverse()
      inverseMap.set('y', 'z')

      expect(map.has('x')).toBe(false)
      expect(map.get('z')).toBe('y')
    })
  })
})
