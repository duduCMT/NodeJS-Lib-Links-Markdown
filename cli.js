import chalk from 'chalk'
import { getLinksFromFile } from './index.js'

const cli = process.argv

async function processaTexto(filePath){
    const resultado = await getLinksFromFile(filePath)
    console.log(chalk.yellow('Lista de Links'), resultado)
}

processaTexto(cli[2])
