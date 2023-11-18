
const sleep = (time) => {
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove()
        },time) 
    })
}   

(async () => {
    const puppeteer = require('puppeteer')
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
        args: ['--start-maximized'],
        userDataDir: './cachedata/'
    })
    
    const page = await browser.newPage()

    await page.setDefaultNavigationTimeout(3000);

    await page.goto('https://e.juejin.cn/#/',{waitUntil: 'networkidle2'})

    const newPagePromise = new Promise(res => 
        browser.once('targetcreated', 
          target => res(target.page())
        )
      );

    await page.click('.lottery-icon')

    const newPage = await newPagePromise
    console.log(newPage);
    Promise.all([
        newPage.waitForNavigation()
    ])
    // await newPage.waitForSelector('.rules-box',{timeout: 3000})
    sleep(5000)
    // await newPage.click('.arrow-right-icon')
    await newPage.click('.rules-box')
    await newPage.click('.turntable-item')
})()