'use strict'

const io = require('./io/io')
const MatcherFactory = require('./matcher/factory')
let factory = new MatcherFactory()

io.readFile('res/input.txt')
	.then((lines) => {
		io.readFile('res/patterns.txt')
			.then((patterns) => {
				io.promptInput('Enter matcher type (exact, contain, levenshtein): ')
					.then((answer) => {
						let matcher = factory.createMatcher(answer)
						if (!matcher) {
							io.writeMessage('Wrong matcher type')
							io.closeIO()
							return
						}
						let results = matcher.matchLines(lines, patterns)
						displayMatchedLines(results)
					})
			})
	})


function displayMatchedLines(linesArr) {
	io.writeMessage("Results: ")
	linesArr.forEach((line) => {
		io.writeMessage(line)
	})

	io.closeIO()
}
