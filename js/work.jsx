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
          <div className='img-desc-div'>
            <h1>New Coders</h1>
            <p className='work-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis excepturi tempore earum praesentium quidem nostrum placeat, ipsum, similique nulla repellat ducimus quis, fuga doloremque, veniam odit maiores totam repellendus aliquam.</p>
          </div>
          <img src="./public/images/express-gallery.png" className='work-img' />
          <div className='img-desc-div'>
            <h1>Express-Gallery</h1>
            <p className='work-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis excepturi tempore earum praesentium quidem nostrum placeat, ipsum, similique nulla repellat ducimus quis, fuga doloremque, veniam odit maiores totam repellendus aliquam.</p>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Work
