const express = require("express");
const app = express();
const ExpressError = require("./expressError");

const {
  createFrequencyCounter,
  getMean,
  getMedian,
  getMode,
  convertToNum,
} = require("./math.js");

//mean
app.get("/mean", (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  let queries = req.query.nums.split(",");
  let nums = convertToNum(queries);

  if (nums instanceof Error) {
    throw new ExpressError(nums.message, nums.status);
  }
  return res.json({ operation: "mean", value: `${getMean(nums)}` });
});

//median
app.get("/median", (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  let queries = req.query.nums.split(",");
  let nums = convertToNum(queries);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message, nums.status);
  }
  return res.json({ operation: "median", value: `${getMedian(nums)}` });
});

//mode
app.get("/mode", (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass a query key of nums with a comma-separated list of numbers.",
      400
    );
  }
  let queries = req.query.nums.split(",");
  let nums = convertToNum(queries);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message, nums.status);
  }
  return res.json({ operation: "mode", value: `${getMode(nums)}` });
});

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
