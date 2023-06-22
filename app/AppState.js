// @ts-nocheck
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
import { Player } from "./models/Player.js"
class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./models/Player.js').Player.js[]} */

  players = [
    new Player({ name: 'Bailey', score: 0, color: 'blue', }),
    new Player({ name: 'Jasper', score: 0, color: 'black' })
  ]

  activePlayer = null

  fruits = ['pomegranate', 'strawberry', 'raspberry']

  activeFruit = null

  Points = 0

  Wrong = 0

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
