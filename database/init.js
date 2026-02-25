db = db.getSiblingDB('mydb'); // Create database "mydb"
db.messages.insertMany([
  { text: "Hello World" },
  { text: "Welcome to Fullstack App" }
]);
