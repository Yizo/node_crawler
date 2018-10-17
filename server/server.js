import { insert, select } from './mongodb/test'
import { read } from 'fs';

const Koa = require('koa')
const router = require('koa-router')()
const statics = require('koa-static')
const path = require('path')
const render = require('koa-art-template')
const cors = require('koa2-cors')
const app = new Koa()

const staticPath = './static'
let LANGUAGE = 'cn'

app.use(statics(
    path.join(__dirname, staticPath)
))

app.use(async (ctx, next) => {
    await select().then(res => {
        ctx.state.data = res
        next()
    })    
})

app.use(cors({
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous']   
}))

render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.NODE_ENV !== 'production'
})

router.get('/', async (ctx, next) => {    
    await ctx.render(`index_${LANGUAGE}`)
})

router.get('/index', async (ctx, next) => {  
    await ctx.render(`index_${LANGUAGE}`);   
})

router.get('/contactus', async (ctx, next) => {    
    await ctx.render(`contactus_${LANGUAGE}`)
})

router.get('/package', async (ctx, next) => {        
    await ctx.render(`package_${LANGUAGE}`)
})

router.get('/question', async (ctx, next) => {    
    await ctx.render(`question_${LANGUAGE}`)
})

router.get('/contract', async (ctx, next) => {
    await ctx.render(`contract_${LANGUAGE}`)
})

router.get('/privacy', async (ctx, next) => {
    await ctx.render(`privacy_${LANGUAGE}`)
})

router.get('/cooperation', async (ctx, next) => {
    await ctx.render(`cooperation_${LANGUAGE}`)
})

router.get('/lang/:uage', async(ctx, next) => {
    if (ctx.params) {        
        ctx.status = 200
        ctx.body = ctx.params.uage
        LANGUAGE = ctx.params.uage
        ctx.body = ctx.render(`index_${LANGUAGE}`)        
    }    
})

app.use(async (ctx, next) => {
    console.log('ctx', ctx.state.data)
    next()    
    const agentID = ctx.request.header['user-agent'].toLowerCase().match(/(iphone|ipad|ipod|android)/)
    if (agentID) {
        ctx.render(`mobile_${LANGUAGE}`)
    }
})

app.use(async (ctx, next) => {    
    next()
    const { status } = ctx.response
    if (status === 404) {
        ctx.response.status = 200
        ctx.body = ctx.render(`index_${LANGUAGE}`)
    }
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3013, () => {
    console.log(3013);
})