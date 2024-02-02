const { MongoClient } = require('mongodb');

//Connection URI
const uri = 'mongodb://localhost:27017';

//Datebase Name
const dbName= 'MyFirstDatabase';

//Create a new MongoClient
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

async function DeleteDocument() {
  try{
    //Connect to MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');
    
    //Get a reference to the database
    const db = client.db(dbName);

    //Collection Name
    const collectionName = 'myCollection';
    const collection = db.collection(collectionName);

    //Delete Operation
    const deleteFilter = { city: 'Navi Mumbai'};
    const deleteResult = await collection.deleteOne(deleteFilter);  //deleteMany()
    console.log(`${deleteResult.deletedCount} document(s) deleted`);
    
    //Displaing the document(s) after deletion
    const remainingDocuments = await collection.find().toArray();
    console.log('Document(s) in my collection: ');
    console.log(remainingDocuments);
  }finally{
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}
//Call the createDocument method
DeleteDocument().catch(console.error);