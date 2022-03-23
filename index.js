import chalk from 'chalk';
import fs from 'fs'

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto))
    } catch(erro) {
        throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'))
    }
}

pegaArquivo('./arquivos/texto1.md')