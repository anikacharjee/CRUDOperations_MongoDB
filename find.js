const { MongoClient } = require('mongodb');

//Connection URI
const uri = 'mongodb://localhost:27017';

//Datebase Name
const dbName= 'MyFirstDatabase';

//Create a new MongoClient
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

async function findDocument() {
  try{
    //Connect to MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');
    
    //Get a reference to the database
    const db = client.db(dbName);

    //Collection Name
    const collectionName = 'myCollection';
    const collection = db.collection(collectionName);

    //Read Operation
    // const readResult = await collection.find().toArray();
    // console.log('Documents in the collection');
    // console.log(readResult);
    const query = {city: "Kolkata"};
    const readResult = await collection.find(query).toArray();  //findOne()

    if(readResult.length > 0) {
        console.log('Document(s) found in the collection');
        console.log(readResult);
    } else {
        console.log('Document(s) not found in the collection');
    }
  }finally{
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}
//Call the createDocument method
findDocument().catch(console.error);