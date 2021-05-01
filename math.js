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

const convertToNum = (arr) => {
  return (nums = arr.map((num) => Number(num)));
};

module.exports = {
  getMean,
  getMedian,
  convertToNum,
};
