const { MongoClient } = require('mongodb');

//Connection URI
const uri = 'mongodb://localhost:27017';

//Datebase Name
const dbName= 'MyFirstDatabase';

//Create a new MongoClient
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

async function UpdateDocument() {
  try{
    //Connect to MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');
    
    //Get a reference to the database
    const db = client.db(dbName);

    //Collection Name
    const collectionName = 'myCollection';
    const collection = db.collection(collectionName);

    //Update Operation
    const updateFilter = {name: 'Ram'};
    const updateOperation = { $set: { age: 35} };
    const updateResult = await collection.updateOne(updateFilter, updateOperation); //updateMany()
    console.log(`${updateResult.modifiedCount} document(s) updated`);
    
  }finally{
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}
//Call the createDocument method
UpdateDocument().catch(console.error);