const React = require('react')

const Header = React.createClass({
  render () {
    return (
      <div className='header'>
        <img src="./public/images/matt-cover.jpg" className='cover-image' />
      </div>
    )
  }
})

module.exports = Header
