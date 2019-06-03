const schedule = require('node-schedule')
const checkInhacpai = require('./tasks/hacpai')

const main = () => {
  schedule.scheduleJob('01 0 0 * * *', () => {
    checkInhacpai()
  })
}

main()
