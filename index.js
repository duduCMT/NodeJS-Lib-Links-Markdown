import chalk from 'chalk';
import fs from 'fs'

function extractLinks(text){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const resultArray = []

    let temp;

    while((temp = regex.exec(text)) !== null){
        resultArray.push({
            [temp[1]]: temp[2]
        })       
    }

    return resultArray.length === 0 ? 'Não há links' : resultArray
}

async function getLinksFromFile(filePath){
    const encoding = 'utf-8'
    try {
        const text = await fs.promises.readFile(filePath, encoding)
        return extractLinks(text)
    } catch(erro) {
        throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'))
    }
}

export { getLinksFromFile }