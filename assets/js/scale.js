'use strict'

export default class {
  constructor () {
    return this
  }

  domain (v) { // Set input range
    this.minD = v[0]
    this.maxD = v[1]
    return this
  }

  range (v) { // Set output range
    this.minR = v[0]
    this.maxR = v[1]
    return this
  }

  map (v) { // Map input value to output range
    const { minD, maxD, minR, maxR } = this

    // Check if value is outside of input range
    if (minD <= maxD) { // Input range is rising
      if (v <= minD) {
        return minR
      } else if (v >= maxD) {
        return maxR
      }
    } else { // Input range is inverted
      if (v >= minD) {
        return minR
      } else if (v <= maxD) {
        return maxR
      }
    }

    // Calculate relation of value to input range and find relation on ouput range
    return ((maxR - minR) * ((v - minD) / (maxD - minD))) + minR
  }
}
