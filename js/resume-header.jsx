const React = require('react')
const { Link } = require('react-router')

const ResumeHeader = React.createClass({
  render () {
    return (
      <div className='header'>
        <div className='daHeader'>
          <div className='brand'>
            <Link to='/' className='header-home-link'>
              <h1 className='extremeHeader'>devmatto</h1>
            </Link>
          </div>
          <div className='nav-bar'>
            <div className='nav-item'>
              <Link to='/' className='header-link'>Home</Link>
            </div>
            <div className='nav-item'>
              <Link to='/work' className='header-link' >Work</Link>
            </div>
            <div className='nav-item'>
              <Link to='/resume' className='header-link' id="header-link-resume">Resume</Link>
            </div>
            <div className='nav-item'>
              <Link to='/contact' className='header-link' >Contact</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = ResumeHeader
