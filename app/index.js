'use strict'

const fileReader = require('./fileReader')
const matcher = require('./matcher/baseMatcher')

Promise.all([
	fileReader().readLinesFromFile('res/input.txt'),
	fileReader().readLinesFromFile('res/patterns.txt'),
]).then((arrays) => {
	let lines = matcher.matchLines(arrays[0], arrays[1])
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
