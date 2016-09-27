'use strict'

const express = require('express')
const app = express()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./config.js')
const webpackConfig = require('./webpack.config.js')
const compiler = webpack(webpackConfig)
const Mailgun = require('mailgun-js')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {colors: true}
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}))

//Your api key,from Mailgun’s Control Panel
const api_key = config.mg_API_key
//Your domain, from the Mailgun Control Panel
const domain = config.domain
//Your sending email address
const to_me = 'olsen_matthew@yahoo.com'

app.get('/submit/:mail', function(req,res) {

    //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
    var mailgun = new Mailgun({apiKey: api_key, domain: domain});

    var data = {
    //Specify email data
      from: req.params.mail,
    //The email from contact
      to: to_me,
    //Subject and text data
      subject: 'Hello from Mailgun',
      html: 'Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! <a href="http://0.0.0.0:3030/validate?' + req.params.mail + '">Click here to add your email address to a mailing list</a>'
    }

    //Invokes the method to send emails given the above data with the helper library
    mailgun.messages().send(data, function (err, body) {
        //If there is an error, render the error page
        if (err) {
            res.render('error', { error : err});
            console.log("got an error: ", err);
        }
        //Else we can greet    and leave
        else {
            //Here "submitted.jade" is the view file for this landing page
            //We pass the variable "email" from the url parameter in an object rendered by Jade
            res.render('submitted', { email : req.params.mail });
            console.log(body);
        }
    });

});


const isDeveloping = process.env.NODE_ENV !== 'production'
const port = isDeveloping ? 3000 : process.env.PORT

const onStart = (err) => {
  if (err) {
    throw new Error(err)
  }
  console.info(
    `==> 🌎 Listening on port ${port}. ` +
    `Open up http://localhost:${port}/ in your browser.`
  )
}

app.listen(process.env.PORT || 3000, onStart)
