'use strict'

const baseMatcher = require('./baseMatcher')
let exactMatcher = Object.create(baseMatcher)

exactMatcher.comparator = function(line, pattern) {
	return line == pattern
}

module.exports = exactMatcher
