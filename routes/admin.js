const express = require('express');

const routes = express.Router();

routes.get('/add-product',(req,res,next)=>{
        // console.log("inside 'Add product' middleware")// these are dummy middlewares to handle the incomming request
        res.send("<form action='/admin/product' method='POST'><input type='text' name='title'></input><button type='submit'>Send</button</form>")
    
    })


routes.post('/product',(req,res,next)=>{
    // console.log("inside the middleware")// these are dummy middlewares to handle the incomming request
    // res.send("<h1>hello from /</h1>")
    console.log(req.body)
    res.redirect('/')
})
module.exports = routes;