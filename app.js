const express = require('express')
const {mean, median, mode, convertAndValidateArray} = require('./calculator')
const ExpressError = require('./expressError')

const app = express();

app.get("/mean", (req, res, next) => { 
  try {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateArray(numsAsStrings);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }

    return res.json({
        operation: "mean",
        value: mean(nums)
        })
  } catch (e) {
    next(e)
  }
})

app.get("/median", (req, res, next) => { 
  try {
    let val = median(req.query)

    return res.json({
        operation: "median",
        value: val
        })
  } catch (e) {
    next(e) 
  }
})

app.get("/mode", (req, res, next) => {
  try {
    let val = mode(req.query)

    return res.json({
        operation: "mode",
        value: val
        })
  } catch (e) {
    next(e)
  }
})

app.use((req, res, next) => { 
  const e = new ExpressError("Page Not Found", 404) 
  next(e);
})

app.use((err, req, res, next) => { //error handler
 
  let status = err.status || 500;
  let message = err.msg;

  return res.status(status).json({
    error: {message, status}
  })
}) 

app.listen(3000, () => {
  console.log("server running on port 3000")
})

