'use strict'

const express = require('express')
const app = express()
const Router = express.Router()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./config.js')
const webpackConfig = require('./webpack.config.js')
const compiler = webpack(webpackConfig)
const bodyParser = require('body-parser')


app.post('/#/contact/contact-me', (req,res)=>{
  console.log(req)
  var helper = require('sendgrid').mail;
  var from_email = new helper.Email('test@example.com');
  var to_email = new helper.Email('olsen_matthew@yahoo.com');
  var subject = 'Hello World from the SendGrid Node.js Library!';
  var content = new helper.Content('text/plain', 'Hello, Email!');
  var mail = new helper.Mail(from_email, subject, to_email, content);

  var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  sg.API(request, function(error, response) {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  });
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {colors: true}
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}))

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
