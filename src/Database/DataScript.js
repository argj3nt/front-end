import fs from "fs";

// Define your data
const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  // Add more users as needed
];

const messages = [
  { username: "user1", messages: ["Hello", "World"] },
  { username: "user2", messages: ["Foo", "Bar"] },
  // Add more messages as needed
];

// Write the data to JSON files
fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
fs.writeFileSync("messages.json", JSON.stringify(messages, null, 2));