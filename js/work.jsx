const React = require('react')
const Header = require('./header')
const { Link } = require('react-router')

const Work = React.createClass({
  render () {
    return (
      <div className='app-container'>
        <div className='header-div'>
          <Header />
        </div>
        <div className='work-div'>
          <img src="./public/images/new-coders.png" className='work-img' />
          <img src="./public/images/express-gallery.png" className='work-img' />
        </div>
      </div>
    )
  }
})

module.exports = Work
