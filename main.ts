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
