const React = require('react')
const { Link } = require('react-router')

const Landing = React.createClass({
  render () {
    return (
      <div className='header-container'>
        <div className='content-div'>
          <h1 className='title'>devmatto</h1>
        </div>
        <div className='nav-container'>
          <Link to='/about-me' className='about-me'>About Me</Link>
        </div>
      </div>
    )
  }
})

module.exports = Landing
