'use strict'

export default function createTicks (domain, height, callback) {
  /* eslint-disable */
  const [v1, v2] = domain
  const range = Math.abs(v2 - v1)
  const order = Math.pow(10, Math.floor(Math.log(range) / Math.LN10 + 0.000000001))
  const parts = String(order).split('.')
  let d = 0
  let factor = 1
  if (parts.length === 2) {
    d = parts[1].length
    factor = 10 ** -d
  }
  let c = 10 // max number of ticks
  let n = true
  while (c > 0 && n) {
    c--
    if (range % (c * factor).toFixed(2) === 0) {
      n = false
    }
  }
  if (c === 0) { c = 2 }
  const step = range / c
  const _ticks = Array.apply(null, Array(c + 1)).map(function () {})
  return _ticks.map((tick, n) => {
    return [(n * step).toFixed(d), height - callback(n * step)]
  }).reverse()
  /* eslint-enable */
}
