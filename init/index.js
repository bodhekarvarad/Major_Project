const mongoose = require('mongoose');
const data=require('./data');
const Listing = require('../models/listing');

//database connection
const MONGO_URI='mongodb://127.0.0.1:27017/wanderlustDB';
main().then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.error('Error connecting to MongoDB:', err);
});
async function main() {
    await mongoose.connect(MONGO_URI);
    
}

const initDB=async()=>{
 await Listing.deleteMany({});
 await Listing.insertMany(data.data);
 console.log("Database initialized with sample data");
};
initDB();
