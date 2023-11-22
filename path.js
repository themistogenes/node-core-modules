// node path in terminal to run this file

const path = require('path');

const myFilePath = 'subfolder/anotherfolder/index.js';

// basename()
const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, '.js'); // Removes the extension
// console.log(base1);
// console.log(base2);

// extname()
const ext = path.extname(myFilePath);
// console.log(ext);

// dirname()
const dir = path.dirname(myFilePath);
// console.log(dir);

// join(), adds correct slashes on different OS's
const myPath = path.join('subfolder', 'anotherfolder', 'index.js');
// console.log(myPath);

// resolve(), gives you the absolute path
const myPath2 = path.resolve('subfolder', 'anotherfolder', 'index.js');
// console.log(myPath2);

// __dirname, gives you the absolute path of the directory you are currently in
// console.log(__dirname);

// __filename, gives you the absolute path of the file
console.log(__filename);