const fs = require('fs').promises;
const arguments = process.argv.slice(2)

async function readFile(file) {
    const data = await fs.readFile(file)
    const dataToString = data.toString()
    console.log(dataToString)
}

console.log(readFile('spesa.txt'))

async function writeFile(file, content){
    await fs.writeFile(file, content, {flag: 'a'})
}

const content = `\n prodotto: ${arguments[0]} quantity: ${arguments[1]}}`

async function writeandRead() {
    await writeFile('spesa.txt', content)
    await readFile ('spesa.txt')
}

writeandRead()



writeFile('index.html', html);