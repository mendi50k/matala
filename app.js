const http = require('http');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '/text');
const textIn = fs.readFileSync(`${dirPath}/input.txt`, 'utf-8');
const textOut = `the text was: ${textIn}`;
console.log(textOut);
console.log(textOut);

fs.writeFileSync(`${dirPath}/output.txt`, textOut);
const fileData = fs.readFileSync(`${__dirname}/json/input.json`);
const fileJSON = fileData.toString();

const data = JSON.parse(fileJSON);
// הפקת שמות
const names = data.map((item) => item.name);

let nameCount = `Number of names: ${names.length}`;
fs.writeFileSync(`${dirPath}/user_count.txt`, nameCount);
fs.writeFileSync(`${dirPath}/user_names.txt`, names.toString());

// הדפסת התוצאות

console.log("Names:", names);

console.log(typeof fileJSON);

console.log(fileJSON);

fs.writeFileSync(`${__dirname}/json/output.json`, fileJSON);

const fileObj = JSON.parse(fileJSON);
console.log(fileObj);




// let m = 'mendi'
// console.log(m.toLocaleUpperCase());

// const { readFile, writeFile } = require("fs").promises;
// console.log("start");
// const path = require("path");
// const dirPath = path.join(__dirname, "/text");

// const start = async () => {
//   try {
//     const first = await readFile(`${dirPath}/first.txt`, "utf8");
    
//     console.log(first);
//     await writeFile(
//       `${dirPath}/123.txt`,
//       `THIS IS AWESOME : ${first.toLocaleUpperCase()}`,
//       { flag: "a" }
//     );
//     console.log(first);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
// console.log("code end");


// const http = require("http");
// const fs = require("fs");

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   const fileStream = fs.createReadStream(__dirname + "/index.htm");
//   fileStream.pipe(res);
// });

// server.listen(3000);
