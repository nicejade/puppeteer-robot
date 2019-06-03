/**
 * @desc colorize your javascript code logs on terminal
 * @author nicejade
 * @website: https://www.jeffjade.com/
 */

const chalk = require('chalk')

const error = chalk.bold.red
const warning = chalk.keyword('orange')
const success = chalk.bold.green

const $console = {
  error: (...args) => {
    console.log(error(args[0]), args[1])
  },
  warning: (...args) => {
    console.log(warning(args[0]))
  },
  success: (...args) => {
    console.log(success(args[0]))
  }
}

module.exports = $console
