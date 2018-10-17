const rp = require('request-promise')
const cheerio = require('cheerio')
const path = require('path')

var BaseUrl = 'http://m.cct58.com/'

async function fetchNav() {
    const res = await rp(BaseUrl)
    const $ = cheerio.load(res) || window.$
    console.log(window.$)
    const navlist = []
    const ul = $.find('.my_nav ul')
    console.log(ul)
    return res
}

fetchNav()