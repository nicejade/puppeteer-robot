const puppeteer = require('puppeteer-core')
const $util = require('./../helper/util')
const $console = require('./../helper/console')
const secretConfig = require('./../config/secret')

const options = {
  headless: false,
  // args: ['--no-sandbox'],
  executablePath: $util.getExecutablePath()
}

const startLogin = async (page, browser) => {
  await page.click('#verifyHacpaiIcon', { delay: 20 })
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

const start = async () => {
  $console.success('🌊 Puppeteer robot start working.')
  const browser = await puppeteer.launch(options)
  const page = await browser.newPage()
  await page.goto('https://hacpai.com/login')
  await page.waitFor('#verifyHacpaiIcon')
  try {
    $console.success('✓ Okay, Start Login...... ')
    startLogin(page, browser)
  } catch (error) {
    $console.success('Opps, Something Error: ', error || 'null')
    await page.close()
    await browser.close()
  }
}

module.exports = start
