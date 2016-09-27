'use strict'

const express = require('express')
const app = express()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./config.js')
const webpackConfig = require('./webpack.config.js')
const compiler = webpack(webpackConfig)
const bodyParser = require('body-parser')
const sendgrid = require('sendgrid')(config.username, config.sg_API_key)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {colors: true}
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}))

app.get('/contact', (req,res)=>{
  sendgrid.send({
    to: 'olsen_matthew@yahoo.com',
    from: 'suhhh@dude.com',
    subject: 'hello world',
    text: 'My first email through sendgrid'
  },(err,json){
    if (err) { return res.send('AAAAAAAHHHHHHHHHH!') }
    res.send(json)
  })
})

const isDeveloping = process.env.NODE_ENV !== 'production'
const port = isDeveloping ? 3000 : process.env.PORT

const onStart = (err) => {
  if (err) {
    throw new Error(err)
  }
  console.info(
    `==> 🌎 Listening on port ${port}. ` +
    `Open up http://localhost:${port}/ in your browser.` +
    encodeURIComponent('olsen_matthew@yahoo.com')
  )
}

app.listen(process.env.PORT || 3000, onStart)
