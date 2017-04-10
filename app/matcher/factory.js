'use strict'

const exactMatcher = require('./exactMatcher')
const containMatcher = require('./containMatcher')
const levenshteinMatcher = require('./levenshteinMatcher')

function MatcherFactory() {
	this.createMatcher = function(type) {
		let matcher = null

		if (type == 'exact') {
			matcher = exactMatcher	
		}
		if (type == 'contain') {
			matcher = containMatcher
		}
		if (type == 'levenshtein') {
			matcher = levenshteinMatcher	
		}
		if (matcher == null) {
			throw new Error('Wrong matcher type')
		}
		return matcher
	}
}

module.exports = MatcherFactory
