const React = require('react')
const { Link } = require('react-router')

const Header = React.createClass({
  render () {
    return (
      <div className='header'>
        <div className='daHeader'>
          <div className='brand'><h1 className='brand-header'>devmatto</h1></div>
          <div className='nav-bar'>
            <div className='nav-item'>
              <Link to='/work' className='work-link'>Work</Link>
            </div>
            <div className='nav-item'>
              <Link to='/tech-stack' className='tech-stack-link'>Tech Stack</Link>
            </div>
            <div className='nav-item'>
              <Link to='/pictures' className='pictures-link'>Pictures</Link>
            </div>
          </div>
        </div>
        <img src="./public/images/matt-cover.jpg" className='cover-image' />
      </div>
    )
  }
})

module.exports = Header
