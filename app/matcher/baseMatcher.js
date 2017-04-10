'use strict'

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

module.exports = containMatcher
