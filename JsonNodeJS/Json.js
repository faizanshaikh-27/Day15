// 2. add to another file
const fs = require("fs");

const data = {
    "name": "Faizan",
    "age": 22,
    "city": "Mumbai"
};
console.log(data); //object

const jsonData = JSON.stringify(data);
console.log(jsonData); // JSON Format

const objData = JSON.parse(jsonData);
console.log(objData); // object format


/* Task
1. Convert to JSON
2. add to another file
3. read file
4. again convert back to js object
5. console.log
*/

// 1. Convert to JSON
const convert_to_JSON_data = JSON.stringify(data);


// 2. add to another file
fs.writeFile("json1.json", convert_to_JSON_data, (err) => {
    console.log("done");
});

// 3. read file
fs.readFile("json1.json", "utf-8", (err, data) => {
    console.log(data);
});

fs.readFile("json1.json", "utf-8", (err, data) => {
const orgData = JSON.parse(data);
console.log(orgData)
});