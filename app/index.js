'use strict'

const io = require('./io/io')
const MatcherFactory = require('./matcher/factory')

function displayMatchedLines(linesArr) {
	io.writeMessage("Results: ")
	linesArr.forEach((line) => {
		io.writeMessage(line)
	})

	io.closeIO()
}

const dataInput = {
	lines: null,
	patterns: null,
}


Promise.all([
	io.readFile('res/input.txt'),
	io.readFile('res/patterns.txt')
]).then((results) => {
		dataInput.lines = results[0]
		dataInput.patterns = results[1]
	})
	.catch((reason) => io.writeMessage('wrong file name'))
	.then(() => io.promptInput('Enter matcher type (exact, contain, levenshtein): '))
	.then((answer) => {
		try {
			let results = (new MatcherFactory()).createMatcher(answer)
				.matchLines(dataInput.lines, dataInput.patterns)
			displayMatchedLines(results)
		} catch(e) {
			io.writeMessage('Wrong matcher type')
			io.closeIO()
		}
	})


