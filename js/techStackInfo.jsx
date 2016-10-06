'use strict'
const angular = require('../public/images/tech-stack/logo_angular.png')
const bash = require('../public/images/tech-stack/logo_bash.png')
const bootstrap = require('../public/images/tech-stack/logo_bootstrap.svg')
const chai = require('../public/images/tech-stack/logo_chai.png')
const d3 = require('../public/images/tech-stack/logo_d3.svg')
const es6 = require('../public/images/tech-stack/logo_es6.svg')
const express = require('../public/images/tech-stack/logo_express.png')


const techStackInfo = () => {
  const techStackList = [
        {logo: angular,
         urlLink: 'https://angularjs.org/'},
        {logo: bash,
         urlLink: 'http://ohmyz.sh/'},
        {logo: bootstrap,
         urlLink: 'http://getbootstrap.com/'},
        {logo: chai,
         urlLink: 'http://chaijs.com/'},
        {logo: d3,
         urlLink: 'https://d3js.org/'},
        {logo: es6,
         urlLink: 'http://es6-features.org/'},
        {logo: express,
         urlLink: 'https://expressjs.com/'},
        {logo: './public/images/tech-stack/logo_git.png',
         urlLink: 'https://git-scm.com/'},
        {logo: './public/images/tech-stack/logo_graphQL.svg',
         urlLink: 'http://graphql.org/'},
        {logo: './public/images/tech-stack/logo_gulp.svg',
         urlLink: 'http://gulpjs.com/'},
        {logo: './public/images/tech-stack/logo_html.svg',
         urlLink: 'https://www.w3.org/wiki/The_web_standards_model_-_HTML_CSS_and_JavaScript'},
        {logo: './public/images/tech-stack/logo_mocha.svg',
         urlLink: 'https://mochajs.org/'},
        {logo: './public/images/tech-stack/logo_mongo.png',
         urlLink: 'https://www.mongodb.com/'},
        {logo: './public/images/tech-stack/logo_node.svg',
         urlLink: 'https://nodejs.org/en/'},
        {logo: './public/images/tech-stack/logo_passportjs.svg',
         urlLink: 'http://passportjs.org/'},
        {logo: './public/images/tech-stack/logo_postgres.png',
         urlLink: 'https://www.postgresql.org/'},
        {logo: './public/images/tech-stack/logo_react.svg',
         urlLink: 'https://facebook.github.io/react/'},
        {logo: './public/images/tech-stack/logo_redis.svg',
         urlLink: 'http://redis.io/'},
        {logo: './public/images/tech-stack/logo_sass.png',
         urlLink: 'http://sass-lang.com/'},
        {logo: './public/images/tech-stack/logo_webpack.svg',
         urlLink: 'https://webpack.github.io/'}
      ]
  return techStackList
}

module.exports = techStackInfo