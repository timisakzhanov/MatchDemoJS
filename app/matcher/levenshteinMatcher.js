'use strict'

const levenshtein = require('fast-levenshtein')
const baseMatcher = require('./baseMatcher')
let levenshteinMatcher = Object.create(baseMatcher)

levenshteinMatcher.comparator = function(line, pattern) {
	return levenshtein.get(line, pattern) <= 1		
}

module.exports = levenshteinMatcher
