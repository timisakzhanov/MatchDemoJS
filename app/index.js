'use strict'

const io = require('./io/io')
const MatcherFactory = require('./matcher/factory')

function displayMatchedLines(linesArr, io) {
	io.writeMessage("Results: ")
	linesArr.forEach(line => io.writeMessage(line))
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
	.then(() => io.promptInput('Enter matcher type (exact, contain, levenshtein): '))
	.then(answer => (new MatcherFactory()).createMatcher(answer)
																				.matchLines(dataInput.lines, dataInput.patterns))
	.then(results => displayMatchedLines(results, io))
	.catch((reason) => io.writeMessage(reason))
	.then(() => io.closeIO())

