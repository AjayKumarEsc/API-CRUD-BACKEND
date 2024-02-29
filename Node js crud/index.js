const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route')

const app = express()

// it is used to get and post json data
//  (middleware for adding things )
app.use(express.json());

// form url encoded middleware configuration
app.use(express.urlencoded({extended: false}));


// routes 

app.use('/api/products' , productRoute);



// get the response on our localhost:3000
app.get('/', (req, res) => {
    res.send("Hello From node API");
});


/* get api for getting all the data from the mongodb 

    app.get('/api/products' , async (req , res) => {
        try{
        const products=  await Product.find({});
        res.status(200).json(products);

        }catch(error){
            res.status(500).json({message: error.message})
        }
    })


*/


/*  get a specific products details depending upon their id

    app.get('/api/products/:id' , async (req, res) => {
        try {
            const {id} =req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

        } catch (error) {
            res.status(500).json({message: error.message});
        }
    })



*/

/* post api to put data to our data base 

    app.post('/api/products' , async (req , res) => {
        try{
        const  product = await Product.create(req.body);
        res.status(200).json(product);
        }catch(error){
            res.status(500).json({message: error.message})
        }
    });

*/

/* Update a product api

    app.put('/api/products/:id' , async (req , res) => {
        try {
            const {id} =req.params;

            const product = await Product.findByIdAndUpdate(id , req.body);
            if(!product){
                return res.status(404).json({message: "Product not found"});
            }

            // view the update product from data base 
            const updatedProduct= await Product.findById(id);
            res.status(200).json(updatedProduct);

        } catch (error) {
            res.status(500).json({message: error.message});
            
        }
    });

*/

/* Delete product Api

        app.delete('/api/products/:id' , async (req, res) =>{
            try {
                
                const {id} = req.params;

                const product = await Product.findByIdAndDelete(id);
                if(!product){
                    return res.status(404).json({message: "Product Not found"});

                }
                res.status(200).json({message: "Product deleted successfully"});


            } catch (error) {
                res.status(500).json({message: error.message});
            }
        })

*/


// connection code for connecting data base

mongoose.connect("mongodb+srv://Admin1:Admin1@backenddb.dlv5iey.mongodb.net/NODE-CRUDE-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database!");
        // server listening code 
        app.listen(3000, () => {
            console.log('server is running on port 3000');
        });

    })
    .catch(() => {
        console.log("connection failed!");
    });