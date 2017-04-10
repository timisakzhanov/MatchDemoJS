'use strict'

const readline = require('readline')
const fs = require('fs')

const fileReader = function(){
	let lines = []
	
	function createReadLine(filename) {
		return readline.createInterface({
			input: fs.createReadStream(filename)
		})
	}

	return {
		readLinesFromFile: function(filename) {
			return new Promise((resolve, reject) => {
				let rl = createReadLine(filename)
				rl.on('line', (line) => {
					lines.push(line)
				}).on('close', () => {
					resolve(lines)
				})
			})
		}
	}
}

module.exports = fileReader
