'use strict'

const levenshtein = require('fast-levenshtein')

const baseMatcher = {

	matchLines: function(linesArr, patternArr) {
		let matchedLines = []

		patternArr.forEach((pattern) => {
			linesArr
				.filter((line) => this.comparator(line, pattern))
				.map((line) => {
					matchedLines.push(line)
				})
		})	
	
		return matchedLines
	}
}

let exactMatcher = Object.create(baseMatcher)
exactMatcher.comparator = function(line, pattern) {
	return line == pattern
}

let containMatcher = Object.create(baseMatcher)
containMatcher.comparator = function(line, pattern) {
	return line.includes(pattern)
}

let levenshteinMatcher = Object.create(baseMatcher)
levenshteinMatcher.comparator = function(line, pattern) {
	return levenshtein.get(line, pattern) <= 1		
}

module.exports = levenshteinMatcher
