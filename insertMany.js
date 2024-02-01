const { MongoClient } = require('mongodb');

//Connection URI
const uri = 'mongodb://localhost:27017';

//Datebase Name
const dbName= 'MyFirstDatabase';

//Create a new MongoClient
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

async function createDocument() {
  try{
    //Connect to MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');
    
    //Get a reference to the database
    const db = client.db(dbName);

    //Collection Name
    const collectionName = 'myCollection';
    const collection = db.collection(collectionName);

    //Create Operation
    const documentsToInsert = [
        {name: 'Rahul', age: 32, city: 'Kolkata'},
        {name: 'Ram', age: 34, city: 'Navi Mumbai'},
        {name: 'Shyam', age: 33, city: 'Kolkata'}
    ];
    const insertResult = await collection.insertMany(documentsToInsert);
    console.log(`${insertResult.insertedCount} document(s) inserted successfully`);
  }finally{
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}
//Call the createDocument method
createDocument().catch(console.error);