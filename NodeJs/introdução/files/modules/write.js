const fs = require('fs').promises;
const path = require('path');
const filePath = path.resolve(__dirname, '..', 'test.json');

const names = [
    {name: 'Abe'},
    {name: 'Tom'},
    {name: 'Edward'},
    {name: 'Mary'},
    {name: 'Karol'},
]

const json = JSON.stringify(names, '', 2);
fs.writeFile(filePath, json, {flag: 'w'});

// module.exports = (filePath, data) => {
//     fs.writeFile(filePath, data, {flag: 'w'});
// };