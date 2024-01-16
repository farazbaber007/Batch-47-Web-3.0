
 const fs = require('node:fs');
fs.readFile('file1.txt', 'utf8', (err, data)=> {

console.log(err, data)
});

console.log("Finished reading file")

fs.writeFile('file2.txt', "This is a data", ()=>{
    console.log("written to the file")


});

console.log("Finished file")