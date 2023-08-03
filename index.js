

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const emailSender=require('./src/helpers/emailSender.helper');

const app = express();

//routes
const usersRouter = require("./src/routes/users.routes");
const settingsRouter=require("./src/routes/settings.routes");

//app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// emailSender({email:'sds@asdd.com',name:'dsdf'})
// process.env.ATLAS_URI;//||'mongodb+srv://Abdullah:Test-123@cluster0.xh7gosd.mongodb.net/Eagle-Elite';
const Uri = process.env.ATLAS_URI; //"mongodb://localhost:27017/userDb";
mongoose.connect(Uri, { useNewUrlParser: true });



//for the routes users
app.use("/users", usersRouter);
app.use("/settings", settingsRouter);

app.listen(process.env.PORT || 5000);

 

// const { MongoClient } = require('mongodb');

// const uri = 'YOUR_MONGODB_ATLAS_CONNECTION_URI';
// const dbName = 'userDb';
// const collectionName = 'users';

// async function deleteAllRecords() {
//   const client = new MongoClient(Uri);

//   try {
//     // Connect to the MongoDB Atlas cluster
//     await client.connect();

//     // Get the reference to the database and collection
//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);

//     // Delete all records in the collection
//     const result = await collection.deleteMany({});

//     console.log(`${result.deletedCount} records deleted successfully.`);
//   } catch (error) {
//     console.error('Error deleting records:', error);
//   } finally {
//     // Close the client connection
//     client.close();
//   }
// }

// // Call the function to delete all records
// deleteAllRecords();


//'https://ghani-soft.vercel.app/settings/GhaniSoftMainLogo.png'
//