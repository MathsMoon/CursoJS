const fs = require('fs').promises;
const path = require('path');

//Função que vai ler o que está escrito no arquivo:
function readFile() {
    fs.readFile('../../../Exercicios/pessoas.json').
    then(file => console.log(JSON.parse(file.toString()))). //convertendo o buffer binário
    catch(e => console(e));
}

//chamando a função:
//readFile();

//Tree de qualquer path:
async function readDir(rootdir) {
    rootdir = rootdir || path.resolve(__dirname);
    const files = await fs.readdir(rootdir);
    walk(files, rootdir);
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
    
        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;
    
        if(stats.isDirectory()) {
            readDir(fileFullPath);
          continue;
        }
    
        if (
          !/\.html$/g.test(fileFullPath)
        ) continue;
        console.log(fileFullPath);
      }
}

readDir('../../introdução');