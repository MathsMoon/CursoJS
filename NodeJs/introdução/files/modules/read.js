const fs = require('fs').promises;
const path = require('path');

module.exports = (file) => {
    fs.readFile(path.resolve(file)).
    then(file => console.log(file.toString())).
    catch(e => console.log(e));
}