// modulos externos
import chalk from "chalk"
import inquirer from "inquirer"

// modulos internos
import fs, { existsSync } from "fs"

const log = console.log
operation();

function operation(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que voce deseja fazer?',
            choices: [
                'Criar conta',
                'Consultar saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        },
    ])
    .then((answer) => {
        const action = answer['action'];
        
        if(action === 'Criar conta'){
            createAccountMessage();
        }
        else if(action == 'Consultar saldo'){
            viewBalance();
        }
        else if(action == 'Depositar'){
            deposit();
        }
        else if(action == 'Sacar'){
            withdraw();
        }
        else if(action == 'Sair'){
           log(chalk.bgBlue('Obrigado por usar o Accounts!!'));
           process.exit();
        }
        
    })
    .catch((err) => log(err))
}
//create account
function createAccountMessage(){
    log(chalk.bgGreen.black('Obrigado por criar uma conta conosco'))
    log(chalk.green('defina as opçoes da sua conta a seguir'))
    buildAccount();
}

function buildAccount(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite o nome da sua conta:',
        },
    ])
    .then((answer) =>{
        const accountName = answer['accountName']

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts');
        }
        if(fs.existsSync(`accounts/${accountName}.json`)){
            log(
                chalk.bgRed.black('Esta conta ja existe, favor escolher outro nome')
            )
            buildAccount();
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`,
         '{"balance": 0}',
         (err) =>{
            log(err)
         }
         )
        log(chalk.green(' Parabens sua conta foi criada'))
        operation()

    })
    .catch((err) => log(err))
    
}

// add a amount on user account

function deposit(){
    inquirer.prompt([
       { 
        name : 'accountName',
        message: 'Digite a conta do usuario:'
    },
    ]).then((answer) =>{
        const accountName = answer['accountName']
        if(!verifyUser(accountName)){
            return deposit();
        }
        inquirer.prompt([
            {
                name: 'depositAmount',
                message: 'Informe o valor a ser depositado:'
        },
        ]).then((answer) =>{
            const depositAmount = answer['depositAmount'];
            // add a amount
            addAmount(accountName, depositAmount)
            operation();

        }).catch(err => log(err))
    }).catch(err => log(err));
}

function addAmount(accountName, depositAmount){
    const accountData = getAccount(accountName)
    if(!depositAmount){
        log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde'))
        return deposit();
    }
    accountData.balance = parseFloat(depositAmount) + parseFloat(accountData.balance);
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            log(err);
        }
    )
    log(chalk.green(`Foi depositado o valor de R$${depositAmount} na sua conta`))
    return
}

// view balance on user account
function viewBalance(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Informe o nome da conta a qual se deseja verifiar o saldo',
        },
    ]).then((answer) =>{
        const accountName = answer['accountName']
        if(!verifyUser(accountName)){
            return viewBalance()
        }
        const accountData = getAccount(accountName)
        log(chalk.bgBlue(`Seu balanco é de R$${accountData.balance}`))
        operation();
    }).catch(err => log(err))
   
}

// withdraw a amount on user account
function withdraw(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Informe o nome da conta de usuario',
        },
    ]).then((answer) =>{
       const accountName = answer['accountName'];
       if(!verifyUser(accountName)){
        return withdraw();
       }
       inquirer.prompt([
        {
            name: 'amount',
            message: 'Informe o valor que deseja sacar:'
        },
       ]).then((answer) =>{
        const amount = answer['amount']
        withdrawAmount(accountName, amount)
        return operation()

       }).catch(err => log(err))
    }).catch(err => log(err))
}

function withdrawAmount(accountName, amount){
    const accountData = getAccount(accountName)
    if(!amount){
        log(chalk.bgRed('ocorreu um problema tente novamente mais tarde'))
        return withdraw()
    }
    if(accountData.balance< amount){
        log(chalk.bgRed('Saldo insuficiente para saque'))
        return withdraw()
    }
    accountData.balance =parseFloat(accountData.balance) - parseFloat(amount)
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err){
            log(err)
        } 
    )
    log(chalk.green(`Foi sacado o valor de R$${amount} da sua conta`))
    return

}

// auxiliar functions
function verifyUser(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        log(chalk.bgRed.black('essa conta não existe, favor tentar novamente!'))
        return false 
    }
    return true

}

function getAccount(accountName){
    const accountData = fs.readFileSync(`accounts/${accountName}.json`,{
        encoding: 'utf-8',
        flag: 'r',
    })
    return JSON.parse(accountData)

}