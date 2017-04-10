'use strict'

const fileReader = require('./fileReader')
const exactMatcher = require('./matcher/exactMatcher')
const containMatcher = require('./matcher/containMatcher')
const levenshteinMatcher = require('./matcher/levenshteinMatcher')

Promise.all([
	fileReader().readLinesFromFile('res/input.txt'),
	fileReader().readLinesFromFile('res/patterns.txt'),
]).then((arrays) => {
	let lines = levenshteinMatcher.matchLines(arrays[0], arrays[1])
	displayMatchedLines(lines)
}).catch((error) => {
	// handle error later
})

function displayMatchedLines(linesArr) {
	console.log("Results: ")
	linesArr.forEach((line) => {
		console.log(line)
	})
}
