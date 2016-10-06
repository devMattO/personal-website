'use strict'
const logo_angular = require('../public/images/tech-stack/logo_angular.png')
const logo_bash = require('../public/images/tech-stack/logo_bash.png')
const logo_bootstrap = require('../public/images/tech-stack/logo_bootstrap.svg')
const logo_chai = require('../public/images/tech-stack/logo_chai.png')
const logo_d3 = require('../public/images/tech-stack/logo_d3.svg')
const logo_es6 = require('../public/images/tech-stack/logo_es6.svg')
const logo_express = require('../public/images/tech-stack/logo_express.png')
const logo_git = require('../public/images/tech-stack/logo_git.png')
const logo_graphQL = require('../public/images/tech-stack/logo_graphQL.svg')
const logo_gulp = require('../public/images/tech-stack/logo_gulp.svg')
const logo_html = require('../public/images/tech-stack/logo_html.svg')
const logo_mocha = require('../public/images/tech-stack/logo_mocha.svg')
const logo_mongo = require('../public/images/tech-stack/logo_mongo.png')
const logo_node = require('../public/images/tech-stack/logo_node.svg')
const logo_passportjs = require('../public/images/tech-stack/logo_passportjs.svg')
const logo_postgres = require('../public/images/tech-stack/logo_postgres.png')
const logo_react = require('../public/images/tech-stack/logo_react.svg')
const logo_redis = require('../public/images/tech-stack/logo_redis.svg')
const logo_sass = require('../public/images/tech-stack/logo_sass.png')
const logo_webpack = require('../public/images/tech-stack/logo_webpack.svg')


const techStackInfo = () => {
  const techStackList = [
        {logo: logo_angular,
         urlLink: 'https://angularjs.org/'},
        {logo: logo_bash,
         urlLink: 'http://ohmyz.sh/'},
        {logo: logo_bootstrap,
         urlLink: 'http://getbootstrap.com/'},
        {logo: logo_chai,
         urlLink: 'http://chaijs.com/'},
        {logo: logo_d3,
         urlLink: 'https://d3js.org/'},
        {logo: logo_es6,
         urlLink: 'http://es6-features.org/'},
        {logo: logo_express,
         urlLink: 'https://expressjs.com/'},
        {logo: logo_git,
         urlLink: 'https://git-scm.com/'},
        {logo: logo_graphQL,
         urlLink: 'http://graphql.org/'},
        {logo: logo_gulp,
         urlLink: 'http://gulpjs.com/'},
        {logo: logo_html,
         urlLink: 'https://www.w3.org/wiki/The_web_standards_model_-_HTML_CSS_and_JavaScript'},
        {logo: logo_mocha,
         urlLink: 'https://mochajs.org/'},
        {logo: logo_mongo,
         urlLink: 'https://www.mongodb.com/'},
        {logo: logo_node,
         urlLink: 'https://nodejs.org/en/'},
        {logo: logo_passportjs,
         urlLink: 'http://passportjs.org/'},
        {logo: logo_postgres,
         urlLink: 'https://www.postgresql.org/'},
        {logo: logo_react,
         urlLink: 'https://facebook.github.io/react/'},
        {logo: logo_redis,
         urlLink: 'http://redis.io/'},
        {logo: logo_sass,
         urlLink: 'http://sass-lang.com/'},
        {logo: logo_webpack,
         urlLink: 'https://webpack.github.io/'}
      ]
  return techStackList
}

module.exports = techStackInfo