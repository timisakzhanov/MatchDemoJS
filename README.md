# MatchDemoJS

Application reads text lines from file ```res/input.txt``` and reads pattern lines from following file ```res/patterns.txt```.
Then it asks user to choose method for matching lines with pattern lines. User may select one of the below options:
- exact - will select only lines that have exact matching with any of the pattern lines
- contain - will select only lines that contain any of the pattern lines
- levenstein - will select only lines that contain a match with edit distance <= 1.
At the end, application will display lines that match to the given pattern lines.



# Realization

Within this application I used abstract factory pattern in order to separate different realizations and make code extandable.
```baseMatcher``` - object that performs lines matching.

```containMatcher```, ```exactMatcher``` and ```levenshteinMatcher``` - extand ```baseMatcher``` and declare comparaton functionality.

```MatcherFactory``` - constructor function that creates required matcher.

To communicate with user I have created ```io``` object, that uses console for reading user input and writing messages. It also reads text from files.

# Tools
- node.js
- fast-levenshtein
  
# How to run

In terminal:
- navigare to the root directory
- install node
- install required dependencies (npm install)
- run application: npm start
