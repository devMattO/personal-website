const React = require('react')
const Header = require('./header')
const { Link } = require('react-router')

const TechStack = React.createClass({
  render () {
    const logosAndLinks = [
      { logo: '../public/images/logo_angular.svg',
        link: 'https://angularjs.org/' }
    ]
    return (
      <div className='app-container'>
        <div className='header-div'>
          <Header />
        </div>
        <div className='techStack-content-div'>
          {logosAndLinks[0].logo}
        </div>
      </div>
    )
  }
})

module.exports = TechStack
