const React = require('react')
const { Link } = require('react-router')

const Header = React.createClass({
  render () {
    return (
      <div className='header'>
        <div className='daHeader'>
          <div className='brand'><img src="./public/images/matt-cover.jpg" className='cover-image' />devmatto</div>
          <div className='nav-bar'>
            <Link to='/about-me' className='about-me-link'>About Me</Link>
            <Link to='/projects' className='projects-link'>Projects</Link>
            <Link to='/skills' className='skills-link'>Skills</Link>
            <Link to='/pictures' className='pictures-link'>Pictures</Link>
          </div>
        </div>
        <img src="./public/images/matt-cover.jpg" className='cover-image' />
      </div>
    )
  }
})

module.exports = Header
