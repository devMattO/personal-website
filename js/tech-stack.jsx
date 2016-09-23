const React = require('react')
const Header = require('./header')
const { Link } = require('react-router')

const TechStack = React.createClass({
  render () {
    const techStackInfo = [
      {logo: './public/images/tech-stack/logo_angular.svg',
       urlLink: 'https://angularjs.org/'},
      {logo: './public/images/tech-stack/logo_bash.png',
       urlLink: 'http://ohmyz.sh/'},
      {logo: './public/images/tech-stack/logo_bootstrap.svg',
       urlLink: 'http://getbootstrap.com/'},
      {logo: './public/images/tech-stack/logo_chai.png',
       urlLink: 'http://chaijs.com/'},
      {logo: './public/images/tech-stack/logo_d3.jpg',
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
