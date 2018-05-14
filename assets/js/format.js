'use strict'

module.exports = function format (v, d = 0, u = '%', decode = false) {
  if (v === null || typeof v === 'undefined') {
    return '&mdash;'
  }
  const str = d === 0 ? parseInt(v) : v.toFixed(d)
  const value = str.toString().replace('-', '–').replace('.', ',')
  const spacer = decode ? '' : '&#8239;'
  return value + spacer + u
}
