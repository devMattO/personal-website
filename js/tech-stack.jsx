const React = require('react')
const Header = require('./header')
const { Link } = require('react-router')

const TechStack = React.createClass({
  render () {
    const techStackInfo = [
      {logo: './public/images/tech-stack/logo_angular.png',
       urlLink: 'https://angularjs.org/'},
      {logo: './public/images/tech-stack/logo_bash.png',
       urlLink: 'http://ohmyz.sh/'},
      {logo: './public/images/tech-stack/logo_bootstrap.svg',
       urlLink: 'http://getbootstrap.com/'},
      {logo: './public/images/tech-stack/logo_chai.png',
       urlLink: 'http://chaijs.com/'},
      {logo: './public/images/tech-stack/logo_d3.svg',
       urlLink: 'https://d3js.org/'},
      {logo: './public/images/tech-stack/logo_es6.svg',
       urlLink: 'http://es6-features.org/'},
      {logo: './public/images/tech-stack/logo_express.png',
       urlLink: 'https://expressjs.com/'},
      {logo: './public/images/tech-stack/logo_frontendmasters.png',
       urlLink: 'https://frontendmasters.com/'},
      {logo: './public/images/tech-stack/logo_git.png',
       urlLink: 'https://git-scm.com/'},
      {logo: './public/images/tech-stack/logo_graphQL.svg',
       urlLink: 'http://graphql.org/'},
      {logo: './public/images/tech-stack/logo_gulp.svg',
       urlLink: 'http://gulpjs.com/'},
      {logo: './public/images/tech-stack/logo_html.svg',
       urlLink: 'https://www.w3.org/wiki/The_web_standards_model_-_HTML_CSS_and_JavaScript'},
      {logo: './public/images/tech-stack/logo_jquery.svg',
       urlLink: 'https://jquery.com/'},
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
    return (
        <div className='techStack-content-div'>
          <div className="tech-logos">
            {techStackInfo.map((el, index)=>{
              return (
                <a href={el.urlLink} key={index}>
                  <img src={el.logo} className='imgTagLogos' />
                </a>
              )
            })}
          </div>
        </div>
    )
  }
})

module.exports = TechStack
