/**
 * Implement Map JS
 */

class Map {
  constructor() {}

  set(key, value) {
    this[key] = value
  }

  get(key) {
    return this[key]
  }

  delete(key) {
    delete this[key]
  }

  get size() {
    return Object.keys(this).length
  }
}

const map = new Map()

const symbol = Symbol()

map.set(symbol, 'symbol111')

// map.set('a', 1)
// map.set('b', 2)
// map.set('c', 3)

console.log(map.get(symbol))

map.delete('a')

console.log(map.size)
