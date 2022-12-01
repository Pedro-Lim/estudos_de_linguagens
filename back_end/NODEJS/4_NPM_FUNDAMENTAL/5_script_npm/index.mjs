import _ from 'lodash'
import chalk from 'chalk';

const a = [1,5,4,8,6,4];
const b = [8,4,1,9,45,78];

const diff = _.difference(a,b)

console.log(chalk.red.bgWhite(diff));