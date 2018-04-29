const puppeteer = require('puppeteer')
const timeout = require('./utils/timeout')

puppeteer.launch({
  headless: false
}).then(async (browser) => {
  const page = await browser.newPage()
  page.setViewport({width: 1200, height: 600})
  try {
    await timeout(1000)
    await page.goto('https://juejin.im')
    await timeout(2000)

    var login = await page.$('.login')
    await login.click()

    await page.type('[name=loginPhoneOrEmail]', '15877020868', {delay: 20})

    await page.type('[placeholder=请输入密码]', 'lxfwxl002', {delay: 20})

    var authLogin = await page.$('.panel .btn')
    await authLogin.click()

  } catch (e) {
    console.log(e)
  }

  // browser.close()
})
