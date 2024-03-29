const puppeteer = require('puppeteer-core')
const $util = require('./../helper/util')
const $console = require('./../helper/console')
const secretConfig = require('./../config/secret')

let restartCounter = 0
let restartLimit = 6

const options = {
  headless: false,
  // args: ['--no-sandbox'],
  executablePath: $util.getExecutablePath()
}

const startLogin = async (page, browser) => {
  await page.click('#verifyForm', { delay: 20 })
  await page.waitFor(2 * 1000)
  await page.type('#nameOrEmail', secretConfig.hacpai.account, { delay: 20 })
  await page.type('#loginPassword', secretConfig.hacpai.password, { delay: 20 })
  const loginBtn = await page.$('#loginBtn')
  await loginBtn.click({ delay: 20 })

  $console.success('✓ Okay, Start Checkin .....')
  startCheckin(page, browser)
}

const startCheckin = async (page, browser) => {
  await $util.waitForReadyStateComplete(page)
  await page.click('.side__title', { delay: 20 })
  await page.waitFor('a.green')
  await page.click('a.green', { delay: 20 })
  $console.success('Congratulations, Has successfully checked in.')

  await page.waitFor(1 * 1000)
  await page.close()
  await browser.close()
}

const startGoto = async (page, browser) => {
  await page.goto('https://hacpai.com/login')
  await page.waitFor('#verifyForm')
  $console.success('✓ Okay, Start Login...... ')
  startLogin(page, browser)
}

const start = async () => {
  $console.success('🌊 Puppeteer robot start working.')
  const browser = await puppeteer.launch(options)
  const page = (await browser.pages())[0]
  await page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36'
  )
  try {
    await startGoto(page, browser)
  } catch (error) {
    restartCounter++
    $console.error('Opps, Something Error: ', error || 'null')
    await page.close()
    if (restartCounter < restartLimit) {
      await page.waitFor(1 * 1000)
      await startGoto(page, browser)
    } else {
      await browser.close()
    }
  }
}

module.exports = start
