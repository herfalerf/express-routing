function createFrequencyCounter(arr) {
  return arr.reduce(function (acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}

const getMean = (arr) => {
  sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
};

const getMedian = (arr) => {
  arr.sort((a, b) => a - b);

  let middleIndex = Math.floor(nums.length / 2);
  let median;

  if (nums.length % 2 === 0) {
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
  } else {
    median = nums[middleIndex];
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

  return mostFrequent;
};

const convertToNum = (arr) => {
  return (nums = arr.map((num) => Number(num)));
};

module.exports = {
  createFrequencyCounter,
  getMean,
  getMedian,
  getMode,
  convertToNum,
};
