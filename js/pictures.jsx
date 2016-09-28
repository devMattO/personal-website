const React = require('react')
const Header = require('./header')

const Pictures = React.createClass({
  render () {
    return (
      <div className='app-container'>
        <div className='header-div'>
          <Header />
        </div>
        <div className='pictures-content-div'>
          <div className='pics-div'>
            <img src='./public/images/beach-cover.png' className='pictures' />
            <img src='./public/images/caaarve.png' className='pictures' />
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Pictures
