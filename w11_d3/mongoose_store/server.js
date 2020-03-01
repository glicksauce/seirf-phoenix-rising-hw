//https://git.generalassemb.ly/ira/SEIR-FLEX-123/tree/master/unit_2/w11d3/homework

/*
Restful Routes
#	Action	|URL	        |HTTP Verb	|EJS view 	|mongoose method
1	Index	|/products/         |GET        |index.ejs  |Product.find()
2	Show	|/products/:id      |GET        |show.ejs   |Product.findById()		
3	New	    |/products/new      |GET        |new.ejs	|none
4	Create	|/products/	        |POST       |none       |Product.create(req.body)
5	Edit	|/products/:id/edit	|GET        |edit.ejs   |Product.findById()
6	Update	|/products/:id      |PUT        |none       |Product.findByIdAndUpdate()
7	Destroy	|/products/:id      |DELETE     |none       |Product.findByIdAndDelete()	
*/

const express = require('express')
const app = express()
const port = 3000;
const mongoose = require("mongoose")
const methodOverride = require("method-override")

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

// Connect mongoose to mongo db:
mongoose.connect("mongodb://localhost:27017/mongoose_store", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });

const Product = require('./models/products')

// ROUTES

//JSON Route
app.get("products/json", (req,res) => {
    Product.find({}, (error, products) => {
      res.render(req.body)
    })
  })

// NEW
app.get("products/new", (req, res) =>{
    res.render("new.ejs")
})

// DELETE
app.delete("products/:id", (req, res) =>{
  Product.findByIdAndDelete(req.params.id, (err, data) =>{
    res.redirect('/products')
  })
})

// EDIT
app.get('products/:id/edit', (req,res) =>{
  Product.findById(req.params.id, (err, foundProduct) => {
    res.render(
      'edit.ejs',
      {
        products: foundProduct
      }
    )
  })
})

// PUT
app.put('products/:id', (req, res)=>{
 // if(req.body.shipIsBroken == 'on'){
  //  req.body.shipIsBroken = true
  //} else {
   // req.body.shipIsBroken = false
  //}
  Product.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,updateModel) =>{
    res.redirect('/products')
  })
})

// Create
app.post("/", (req,res) =>{
   // if (req.body.shipIsBroken === "on") {
   //     req.body.shipIsBroken = true;
   //   } else {
   //     req.body.shipIsBroken= false;
   //   }
    Product.create(req.body)
    res.redirect("/products")
})

// Show
app.get("products//:id", (req, res) => {
  Product.findById(req.params.id, (err, showProducts) => {
    res.render("show.ejs", {
      products: showProducts
    })
  })
})

// Index
app.get("/products", (req,res) => {
  Product.find({}, (error, products) => {
    res.render("index.ejs", {products})
  })
})


// web server
app.listen(port, () => {
    console.log("listening on port ", port)
})