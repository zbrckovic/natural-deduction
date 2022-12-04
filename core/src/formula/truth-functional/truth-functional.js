import { Formula } from '../formula'

/**
 * Truth-functional Formula
 * @constructor
 */
export function TruthFunctional () {
  Formula.call(this)
}

Object.assign(TruthFunctional.prototype, Formula.prototype)
