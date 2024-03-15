
const { MongoClient, ServerApiVersion } = require('mongodb');

const credentials = './X509-cert-6554143162103357350.pem'

//connection configuration
const client = new MongoClient('mongodb+srv://workspace.iully3v.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority&appName=workspace', {
  tlsCertificateKeyFile: credentials,
  serverApi: ServerApiVersion.v1
});

async function run() {
  try {
    //retrieves a reference to the desired database 
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("testCol");
    const docCount = await collection.countDocuments({});
    // it will console count of documents in the specified collection of db -- writenow it is coming as 0(todo)
    console.log(docCount);
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
