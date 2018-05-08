'use strict'

module.exports = function format (v, d = 0, u = '%') {
  if (v === null || typeof v === 'undefined') {
    return '&mdash;'
  }
  const str = v.toFixed(d).toString()
  const value = str.replace('-', '–').replace('.', ',')
  return value + '&#8239;' + u
}
