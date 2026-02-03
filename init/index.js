const mongoose = require("mongoose");
const data = require("./data");
const Listing = require("../models/listing");

// database connection
const MONGO_URI = "mongodb://127.0.0.1:27017/wanderlustdb";

async function main() {
  await mongoose.connect(MONGO_URI);
  console.log("Connected to MongoDB");
}

main().catch(err => {
  console.error("Error connecting to MongoDB:", err);
});

const initDB = async () => {
  // remove old data
  await Listing.deleteMany({});

  // FIX image object -> image URL string
  const fixedData = data.data.map(listing => ({
    ...listing,
    image: listing.image.url,
  }));

  // insert all listings
  await Listing.insertMany(fixedData);

  console.log("Database initialized with sample data");
};

initDB();
