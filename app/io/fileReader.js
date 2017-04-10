'use strict'

const readline = require('readline')
const fs = require('fs')

const fileReader = function(){
	let lines = []
	
	function createReadLine(filename) {
		return new Promise((resolve, reject) => {
		
			let inp = fs.createReadStream(filename)
			inp.on('error', function() {
				reject('No such file: ' + filename)
			})

			let rl = readline.createInterface({
				input: inp 
			})

			resolve(rl)
		})
	}

	return {
		readLinesFromFile: function(filename) {
			return new Promise((resolve, reject) => {
				createReadLine(filename)
					.then((rl) => {
						rl.on('line', (line) => {
							lines.push(line)
						}).on('close', () => {
							resolve(lines)
						})
					})
					.catch((reason) => {
						reject(reason)
					})
			})
		}
	}
}

module.exports = fileReader
