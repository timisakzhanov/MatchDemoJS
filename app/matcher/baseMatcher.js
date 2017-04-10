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

module.exports = baseMatcher
