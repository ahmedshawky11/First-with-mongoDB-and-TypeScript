import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

async function save(collectionName: string, document: object) {
  const db = await client.connect();
  const collection = db.collection(collectionName);
  await collection.insertOne(document);
  await client.close();
}

async function read(collectionName: string, filter: object = {}) {
  const db = await client.connect();
  const collection = db.collection(collectionName);
  const documents = await collection.find(filter).toArray();
  await client.close();
  return documents;
}

import { save, read } from "./database";

// Save a document to the database
const document = {
  name: "Ahmed Shawky",
  age: 24,
};
await save("my_collection", document);

// Read all documents from the database
const documents = await read("my_collection");

// Print the value of the documents variable to the console
console.log(documents);
