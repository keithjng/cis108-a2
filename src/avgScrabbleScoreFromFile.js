let fs = require('fs');
let avgScrabbleScore = require('./avgScrabbleScore');

/**
 * Returns the average scrabble score of all the words the
 * given text file.
 *
 * Use fs.readFileSync to read the contents.
 *
 * Create some sample files yourself. We also supplied
 * sample-words.txt.
 */
function avgScrabbleScoreFromFile(fileName) {
  // This is your job. :)
  let words = fs.readFileSync(fileName, 'utf-8');
  let joinLine = words.split('\n').join("");
  let joinWords = joinLine.split(" ").join("");
  let final = avgScrabbleScore(joinWords);
  return final
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScoreFromFile:');
  console.log(avgScrabbleScoreFromFile('word.txt') === 18/7);
  console.log("The average scrabble score of sample words is " + avgScrabbleScoreFromFile('sample-words.txt'));
  console.log("The average scrabble score of Lucky is " + avgScrabbleScoreFromFile('lyrics.txt'));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avgScrabbleScoreFromFile;
