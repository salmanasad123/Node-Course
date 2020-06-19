const fs = require("fs");

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const jsonString = JSON.stringify(book);
// fs.writeFileSync("1-json.json", jsonString);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json");
const jsonData = dataBuffer.toString();
const data = JSON.parse(jsonData);
data.name = "Salman";
data.age = 25;

const jsonString = JSON.stringify(data);
fs.writeFileSync("1-json.json", jsonString);
