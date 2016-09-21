const React = require('react')
const Header = require('./header')
const LandingAboutMe = require('./landing-about-me')
const { Link } = require('react-router')

const Landing = React.createClass({
  render () {
    return (
      <div className='app-container'>
        <div className='header-div'>
          <Header />
        </div>
        <div className='content-div'>
          <LandingAboutMe />
        </div>
      </div>
    )
  }
})

module.exports = Landing
