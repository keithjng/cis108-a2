let scrabbleScore = require('./scrabbleScore');

/**
 * Given an array of words, return the average scrabble
 * score.
 *
 * Use your implementation of scrabbleScore.
 */
function avgScrabbleScore(words) {
  // This is your job. :)
  return scrabbleScore(words) / words.length;
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScore:');
  console.log(avgScrabbleScore('aaa') === 1);
  console.log(avgScrabbleScore('aaa') === avgScrabbleScore('AaA'));
  console.log(avgScrabbleScore('mug') === 2);
  console.log(avgScrabbleScore('drink') === 2);
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avgScrabbleScore;
