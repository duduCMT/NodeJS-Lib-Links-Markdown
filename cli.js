import chalk from 'chalk'
import { getLinksFromFile } from './index.js'
import { urlsValidation } from './http-validation.js'

const cli = process.argv

async function processCLI(cli){
    const result = await getLinksFromFile(cli[2])

    if(cli[3] === 'validate'){
        console.log(chalk.yellow('Links Validados'), await urlsValidation(result))
    } else {
        console.log(chalk.yellow('Lista de Links'), resultado)
    }
}

processCLI(cli)
