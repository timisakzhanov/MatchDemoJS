'use strict'

const exactMatcher = require('./exactMatcher')
const containMatcher = require('./containMatcher')
const levenshteinMatcher = require('./levenshteinMatcher')

function MatcherFactory() {
	this.createMatcher = function(type) {
		let matcher

		if (type == 'exact') {
			matcher = exactMatcher	
		}
		if (type == 'contain') {
			matcher = containMatcher
		}
		if (type == 'levenshtein') {
			matcher = levenshteinMatcher	
		}
		
		return matcher
	}
}

module.exports = MatcherFactory
