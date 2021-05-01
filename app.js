const express = require("express");
const app = express();

const {
  createFrequencyCounter,
  getMean,
  getMedian,
  getMode,
  convertToNum,
} = require("./math.js");

//mean
app.get("/mean", (req, res) => {
  let queries = req.query.nums.split(",");
  let nums = convertToNum(queries);
  console.log(nums);
  return res.json({ operation: "mean", value: `${getMean(nums)}` });
});

//median
app.get("/median", (req, res) => {
  let queries = req.query.nums.split(",");
  let nums = convertToNum(queries);
  return res.json({ operation: "median", value: `${getMedian(nums)}` });
});

//mode
app.get("/mode", (req, res) => {
  let queries = req.query.nums.split(",");
  let nums = convertToNum(queries);
  return res.json({ operation: "mode", value: `${getMode(nums)}` });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
