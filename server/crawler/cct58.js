const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const rpn = require("request-promise-native");

const url = "http://m.cct58.com/";
const TOTAL_PAGE = 50;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

(async () => {
  console.log("开始了");
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    dumpio: false,
    slowMo: 200,
    devtools: false,
    headless: true,
    timeout: 1000
  });

  try {
    const page = await browser.newPage();
    page
      .goto(url, {
        waitUntil: "networkidle2",
        timeout: 0
      })
      .then(async res => {
        console.log(0);
        const nav = await page.$eval(".my_nav", item => item.innerHTML);
        console.log(nav);
        await page.waitForSelector(".my_nav");
        console.log(1);
        await page.evaluate(() => {
          console.log(document.querySelector(".my_nav"));
        });
      })
      .catch(() => {
        browser.close();
      });
  } catch (error) {
    console.log("error", error);
    browser.close();
  }
})();
