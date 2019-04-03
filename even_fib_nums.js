/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  var sum = 0;

  // do your work here
  let firstFib = 0;
  let secondFib = 1;
  let thirdFib = 0;

  while (thirdFib <= maxFibValue) {
    thirdFib = firstFib + secondFib;
    if (thirdFib % 2 === 0) {
      sum += thirdFib;
    }
    firstFib = secondFib;
    secondFib = thirdFib;
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  var highest = 0;

  //define your base case, validate your input
  let firstFib = 0;
  let secondFib = 1;
  let thirdFib = 0;

  //do your work here
  while (thirdFib <= maxFibValue) {
    thirdFib = firstFib + secondFib;
    firstFib = secondFib;
    secondFib = thirdFib;
  }
  highest = firstFib;
  return highest;
};

//stretch goals
function _sumFibs2(maxFibValue) {
  var sum = 0;

  // do your work here
  let firstFib = 0;
  let secondFib = 1;
  let thirdFib = 0;

  while (thirdFib <= maxFibValue) {
    thirdFib = firstFib + secondFib;
    if (thirdFib % 2 === 0 || thirdFib % 5 === 0) {
      sum += thirdFib;
    }
    firstFib = secondFib;
    secondFib = thirdFib;
  }
  return sum - secondFib;
}


/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber,
  sumFibs2: _sumFibs2
};