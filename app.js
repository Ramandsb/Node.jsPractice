const http = require('http');
// const routes = require('./routes')
const express = require('express')
const adminRoutes = require('./routes/admin')
const routesShop = require('./routes/shop')

// import adminRoutes from './routes/admin'
// import routesShop from './routes/shop'

const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes)// we can filter routes which has /admin at start only those can go into this admin routes so now the path becomes /admin/add-product
app.use(routesShop)

// console.log(routes.someText)

// app.use((req,res,next)=>{
//     // console.log("inside the middleware")// these are dummy middlewares to handle the incomming request
//     next()

// })
// app.use((req,res,next)=>{
//     // console.log("inside the 2 middleware")
//     res.send("<h1>hello from expreess</h1>")
//     next()

// })
// const server = http.createServer(app);

// server.listen(3000)

// now we using middleware for particular path
// app.use('/',(req,res,next)=>{
//     console.log("This always runs")
//    next()

// })
// app.use('/add-product',(req,res,next)=>{
//     // console.log("inside 'Add product' middleware")// these are dummy middlewares to handle the incomming request
//     res.send("<form action='/product' method='POST'><input type='text' name='title'></input><button type='submit'>Send</button</form>")

// })
// app.use('/product',(req,res,next)=>{
//     // console.log("inside the middleware")// these are dummy middlewares to handle the incomming request
//     // res.send("<h1>hello from /</h1>")
//     console.log(req.body)
//     res.redirect('/')
// })
//above is generic below is for only post request 
// app.post('/product',(req,res,next)=>{
//     // console.log("inside the middleware")// these are dummy middlewares to handle the incomming request
//     // res.send("<h1>hello from /</h1>")
//     console.log(req.body)
//     res.redirect('/')
// })
// app.use('/',(req,res,next)=>{
//     // console.log("inside the middleware")// these are dummy middlewares to handle the incomming request
//     res.send("<h1>Home</h1>")

// })

app.use((req,res,next)=>{
    res.status(404).send("<h1>404 Page not found</h1>")
})

app.listen(3000)//express handles even that also.

