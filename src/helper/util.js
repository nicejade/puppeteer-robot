const $console = require('./../helper/console')

/**
 * @author nicejade
 * @website https://www.jeffjade.com/
 */
const $util = {}

$util.getExecutablePath = () => {
  const platform = process.platform
  if (platform === 'darwin') {
    return './../../Google/chrome-mac/Chromium.app/Contents/MacOS/Chromium'
  } else if (platform === 'linux') {
    return './../../chrome'
  } else if (platform === 'win32' || platform === 'win64') {
    return './../../chrome.exe'
  }
}

/**
 * @Author   nicejade
 * @DateTime 2017-09-18
 * @param    {Object}   page [browser实例Page]
 * @return   {Boolean}       [页面是否加载完毕]
 */
$util.isLoadingFinished = async page => {
  await page.waitForNavigation()
  return page.evaluate(() => {
    // document.readyState: loading / 加载；interactive / 互动；complete / 完成
    const isCompleted = document.readyState === 'complete'
    return Promise.resolve(isCompleted)
  })
}

/**
 * @Author   nicejade
 * @DateTime 2017-11-28
 * @param    {[type]}   page        [Browser 实例 Page]
 * @param    {Number}   timesLimit  [等待页面加载完的成轮询次数，默认 600]
 * @param    {Number}   cycleFactor [每次轮询的间隔时间(ms)，默认 10]
 * @return   {Boolean}              [等待(timesLimit*cycleFactor)ms后，页面是否加载完毕]
 */
$util.waitForReadyStateComplete = (page, timesLimit = 600, cycleFactor = 20) => {
  return new Promise(async (resolve, reject) => {
    let i = 0
    let isCompleted = await $util.isLoadingFinished(page)
    while (i < timesLimit && !isCompleted) {
      $console.success(`\n♻️  Wait for page load completion，Now the number of polling is: ${i}`)
      isCompleted = await $util.isLoadingFinished(page)
      if (isCompleted) return resolve(true)
      i++
      await page.waitFor(cycleFactor)
    }
    $console.error('✘ Error: Timeout Exceeded: 30000ms exceeded')
    return resolve(false)
  })
}

$util.getRandom = (n, m) => {
  return Math.round(Math.random() * (m - n) + n)
}

module.exports = $util
