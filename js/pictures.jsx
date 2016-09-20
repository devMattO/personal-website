const React = require('react')

const Pictures = React.createClass({
  render () {
    return (
      <div className='pictures-content-div'>
        <h1 className='pictures-header'>Matt Olsen</h1>
        <div className='pics-div'>
          <img src='./public/images/beach-cover.png' className='pictures' />
          <img src='./public/images/caaarve.png' className='pictures' />
        </div>
      </div>
    )
  }
})

module.exports = Pictures
