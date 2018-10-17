const puppeteer = require('puppeteer')
const cheerio = require('cheerio')

const url = `http://m.cct58.com/`
const TOTAL_PAGE = 50

const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

;(async () => {
    console.log('开始了')
    const  browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        dumpio: false,
        slowMo: 200,
        devtools: false,
        headless: false,
        timeout: 1000
    })
    const page = await browser.newPage()
    await page.goto(url, {
        waitUntil: 'load'
    })
    console.log(1)
    await page.waitForSelector('.my_nav')  
    console.log(2)
    const nav = await page.$eval('body', (el) => el.innerHTML)
    console.log(nav)   
})()