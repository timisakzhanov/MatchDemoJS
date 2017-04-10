'use strict'

const baseMatcher = require('./baseMatcher')
let containMatcher = Object.create(baseMatcher)

containMatcher.comparator = function(line, pattern) {
	return line.includes(pattern)
}

module.exports = containMatcher
