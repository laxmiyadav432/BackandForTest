// // require('dotenv').config();
// // const express = require('express');
// // const mongoose = require('mongoose');

// // const routes = require('./routes/routes');

// // const router = express.Router()
// // module.exports = router;

// // const mongoose = require('mongoose');
// // const mongoString = process.env.DATABASE_URL;

// // mongoose.connect("mongodb+srv://laxmiyadav:12345@cluster0.ovljd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// // const database = mongoose.connection;

// // database.on('error', (error) =>{
// //     console.log(error)
// // })

// // database.once('connected', () =>{
// //     console.log('Database Connected');
// // })

// // const app = express();

// // app.use(express.json());
// // app.listen(3000, () => {
// //     console.log(`Server Started at ${3000}`)
// // })



// require('dotenv').config(); // Load environment variables
// const express = require('express'); // Import express
// const mongoose = require('mongoose'); // Import mongoose
// const routes = require('./routes/routes'); // Import your routes

// const app = express(); // Initialize express

// // Connect to MongoDB
// mongoose.connect(process.env.DATABASE_URL || "mongodb+srv://laxmiyadav:12345@cluster0.ovljd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// const database = mongoose.connection;

// database.on('error', (error) => {
//     console.log('Database connection error:', error);
// });

// database.once('connected', () => {
//     console.log('Database Connected');
// });

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api', routes);

// // Start the server
// app.listen(3000, () => {
//     console.log('Server started on port 3000');
// });



require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/routes');

const app = express();
app.use(express.json());

app.use('/api', route);

mongoose.connect(process.env.DATABASE_URL || 'mongodb+srv://laxmiyadav:12345@cluster0.ovljd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const database = mongoose.connection;


database.on('error', (error) =>{
    console.log('Database conction error', error);
});


database.once('connected', () =>{
    console.log('Database Connected');
});



app.listen(3000, () =>{
    console.log(`Server started on the port ${3000}`);
})
