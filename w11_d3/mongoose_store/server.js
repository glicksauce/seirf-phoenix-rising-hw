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
const port = 3002;
const mongoose = require("mongoose")
const methodOverride = require("method-override")

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.use(express.json())

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
app.get("/products/json", (req,res) => {
    Product.find({}, (error, products) => {
        //this also works: res.send(products)
        //this also works: return products
        return res.json(products)
  })
})

// NEW
app.get("/products/new", (req, res) =>{
    res.render("new.ejs")
})

// DELETE
app.delete("/products/:id", (req, res) =>{
  Product.findByIdAndDelete(req.params.id, (err, data) =>{
    res.redirect('/products')
  })
})

// EDIT
app.get('/products/:id/edit', (req,res) =>{
  Product.findById(req.params.id, (err, foundProduct) => {
    res.render(
      'edit.ejs',
      {
        products: foundProduct
      }
    )
  })
})

// PUT for Buy
app.put('/products/:id/buy', (req, res)=>{
    Product.findByIdAndUpdate(req.params.id, {$inc: {qty: -1}}, {new:true}, (err,updateModel) =>{
      res.redirect('/products')
    })
  })

// PUT
app.put('/products/:id', (req, res)=>{
  Product.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,updateModel) =>{
    res.redirect('/products')
  })
})

// Create
app.post("/products", (req,res) =>{
   // if (req.body.shipIsBroken === "on") {
   //     req.body.shipIsBroken = true;
   //   } else {
   //     req.body.shipIsBroken= false;
   //   }
    Product.create(req.body)
    res.redirect("/products")
})

// Index
app.get("/products", (req,res) => {
  Product.find({}, (error, products) => {
    res.render("index.ejs", {products})
  })
})

//SEED DATA ROUTE
app.get('/products/seed', async (req, res) => {
    const newProducts =
      [
        {
          name: 'Beans',
          description: 'A small pile of beans. Buy more beans for a big pile of beans.',
          img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
          price: 5,
          qty: 99
        }, {
          name: 'Bones',
          description: 'It\'s just a bag of bones.',
          img: 'http://bluelips.com/prod_images_large/bones1.jpg',
          price: 25,
          qty: 0
        }, {
          name: 'Bins',
          description: 'A stack of colorful bins for your beans and bones.',
          img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
          price: 7000,
          qty: 1
        }
      ]
  
    try {
      const seedItems = await Product.create(newProducts)
      res.send(seedItems)
    } catch (err) {
      res.send(err.message)
    }
    res.redirect('/products')
  })

  
// Show
app.get("/products/:id", (req, res) => {
    Product.findById(req.params.id, (err, showProducts) => {
      res.render("show.ejs", {
        products: showProducts
      })
    })
  })
  

// web server
app.listen(port, () => {
    console.log("listening on port ", port)
})