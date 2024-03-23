const { MongoClient, MongoExpiredSessionError, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const credentials = './X509-cert-6554143162103357350.pem';

async function run() {
    const client = new MongoClient(process.env.DATABASE_URL, {
        tlsCertificateKeyFile: credentials,
        serverApi: ServerApiVersion.v1
    });

    try {
        await client.connect();
        const database = client.db("FoodApp-DB");
        const collection = database.collection("topRestaurants");

        // Perform database operation using session
        const documents = await collection.find({}).toArray();
        return documents

    } catch (error) {
        // Handle MongoExpiredSessionError
        if (error instanceof MongoExpiredSessionError) {
            console.error("MongoDB session expired. Please retry operation with a new session.");
            // Retry operation with a new session...
        } else {
            console.error("Error:", error);
        }
    } finally {
        // Close the client connection
        await client.close();
    }
}

run().catch(console.error);
