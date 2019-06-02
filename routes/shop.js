const express = require('express');

const router = express.Router()

router.get('/', (req, res, next) => {
    // console.log("inside the middleware")// these are dummy middlewares to handle the incomming request
    res.send("<h1>Home</h1>")

})

module.exports = router