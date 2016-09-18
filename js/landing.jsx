const React = require('react')
const { Link } = require('react-router')

const Landing = React.createClass({
  render () {
    return (
      <div className='app-container'>
        <div className='content-div'>
          <h1 className='title'> Matt (devmatto) Olsen </h1>
          <Link to='/about-me' className='about-me'>About Me</Link>
        </div>
      </div>
    )
  }
})

module.exports = Landing
