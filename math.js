const ExpressError = require("./expressError");

function createFrequencyCounter(arr) {
  return arr.reduce(function (acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}

const getMean = (arr) => {
  if (arr.length === 0) return 0;
  else {
    sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
  }
};

const getMedian = (arr) => {
  arr.sort((a, b) => a - b);

  let middleIndex = Math.floor(arr.length / 2);
  let median;

  if (arr.length % 2 === 0) {
    median = (arr[middleIndex] + arr[middleIndex - 1]) / 2;
  } else {
    median = arr[middleIndex];
  }
  return median;
};

const getMode = (arr) => {
  let freqCounter = createFrequencyCounter(arr);

  let count = 0;
  let mostFrequent;

  for (let key in freqCounter) {
    if (freqCounter[key] > count) {
      mostFrequent = key;
      count = freqCounter[key];
    }
  }

  return +mostFrequent;
};

const convertToNum = (numArr) => {
  let result = [];

  for (let i = 0; i < numArr.length; i++) {
    let valToNumber = Number(numArr[i]);

    if (Number.isNaN(valToNumber)) {
      return new ExpressError(
        `The value '${numArr[i]}' at index ${i} is not a valid number.`,
        400
      );
    }

    result.push(valToNumber);
  }
  return result;
};

module.exports = {
  createFrequencyCounter,
  getMean,
  getMedian,
  getMode,
  convertToNum,
};
