
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/routes');

const app = express();
app.use(express.json());

app.use('/', route);

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
