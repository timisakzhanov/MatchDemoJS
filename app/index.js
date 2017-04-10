'use strict'

const fileReader = require('./fileReader')
const MatcherFactory = require('./matcher/factory')
const readline = require('readline')
let factory = new MatcherFactory()

const rl = readline.createInterface({
  input: process.stdin,
	output: process.stdout
});

readFiles()

function readFiles() {
	Promise.all([
		fileReader().readLinesFromFile('res/input.txt'),
		fileReader().readLinesFromFile('res/patterns.txt'),
	]).then((arrays) => {
		rl.question('Enter matcher type (exact, contain, levenshtein): ', (answer) => {
			let matcher = factory.createMatcher(answer)
			if (!matcher) {
				console.log('Wrong matcher type')
				rl.close()
				return
			}
			let lines = matcher.matchLines(arrays[0], arrays[1])
			displayMatchedLines(lines)
		});
		
	}).catch((error) => {
		console.log('error happened')
		rl.close()
	})
}


function displayMatchedLines(linesArr) {
	console.log("Results: ")
	linesArr.forEach((line) => {
		console.log(line)
	})

	rl.close()
}
