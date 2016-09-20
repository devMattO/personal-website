const React = require('react')
const Header = require('./header')
const { Link } = require('react-router')

const Landing = React.createClass({
  render () {
    return (
      <div className='app-container'>
        <div className='header-div'>
          <Header />
        </div>
        <div className='content-div'>
          <h1 className='title'> Matt {'{devmatto}'} Olsen </h1>
          <Link to='/about-me' className='about-me-link'>About Me</Link><br />
          <Link to='/projects' className='projects-link'>Projects</Link><br />
          <Link to='/skills' className='skills-link'>Skills</Link><br />
          <Link to='/pictures' className='pictures-link'>Pictures</Link><br />
        </div>
      </div>
    )
  }
})

module.exports = Landing
