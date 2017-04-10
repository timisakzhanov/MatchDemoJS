'use strict'


const matchLines = (linesArr, patternArr) => {
	let matchedLines = []

	patternArr.forEach((pattern) => {
		linesArr
			.filter((line) => {
				return line == pattern		
			})
			.map((line) => {
				matchedLines.push(line)
			})
	})	
	
	return matchedLines
}

module.exports = matchLines
