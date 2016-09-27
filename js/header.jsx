const React = require('react')
const { Link } = require('react-router')

const Header = React.createClass({
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
              <Link to='/work' className='header-link'>Work</Link>
            </div>
            <div className='nav-item'>
              <Link to='/tech-stack' className='header-link'>Tech Stack</Link>
            </div>
            <div className='nav-item'>
              <Link to='/pictures' className='header-link'>Pictures</Link>
            </div>
            <div className='nav-item'>
              <Link to='/contact' className='header-link'>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Header
