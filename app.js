const express = require("express");
const app = express();

const { getMean, getMedian, convertToNum } = require("./math.js");

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
  res.send("<h1>mode</h1>");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
