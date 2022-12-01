import  chalk  from "chalk";
const nota = 5;

if(nota >= 7){
    console.log(chalk.green("aprovado"))
}else{
    console.log(chalk.bgWhite.red("REPROVADO!!"))
}