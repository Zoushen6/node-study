const fs = require('node:fs')
const { JSDOM } = require('jsdom')
const axios = require('axios')
const { log } = require('node:console')

const dom = new JSDOM(`<!DOCTYPE html><div id='app'></div>`)

const document = dom.window.document

const window = dom.window

axios('https://api.thecatapi.com/v1/images/search?limit=10&page=1').then(res => {
    const app = document.getElementById('app')
    res.data.forEach(item=>{
       const img =  document.createElement('img')
       img.src = item.url
       img.style.width = '200px'
       img.style.height = '200px'
       app.appendChild(img)
    })
    fs.writeFileSync('./index.html', dom.serialize())
})
