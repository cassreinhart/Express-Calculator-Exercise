
const express = require('express')
const calculator = require('./calculator')

const app = express();

app.get("/mean", (req, res, next) => { 
  try {
    // const user = USERS.find(u => u.username === req.params.username);
    // if (!user) throw new ExpressError("invalid username", 404)
    return res.send({user})
  } catch (e) {
    next(e)
  }
})

app.get("/median", (req, res, next) => { 
  try {
    ////
    return res.send("CONGRATS")
  } catch (e) {
    next(e) 
  }
})

app.get("/mode", (req, res, next) => {
  try {
    ///
  } catch (e) {
    // return next(new ExpressError("Calculation Error"))
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

