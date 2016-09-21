const React = require('react')
const Header = require('./header')
const landingAboutMe = require('./landing-about-me')
const { Link } = require('react-router')

console.log(landingAboutMe,'<----landingAboutMe');

const Landing = React.createClass({
  render () {
    return (
      <div className='app-container'>
        <div className='header-div'>
          <Header />
        </div>
        <div className='content-div'>
          <landingAboutMe />
        </div>
      </div>
    )
  }
})

module.exports = Landing
