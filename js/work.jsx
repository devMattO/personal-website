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
          <a href='http://www.newcoders.xyz'><img src="./public/images/new-coders.png" className='work-img' /></a>
          <div className='img-desc-div'>
            <h1>New Coders</h1>
            <p className='work-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis excepturi tempore earum praesentium quidem nostrum placeat, ipsum, similique nulla repellat ducimus quis, fuga doloremque, veniam odit maiores totam repellendus aliquam.</p>
          </div>
          <a href='expressgallery.herokuapp.com'><img src="./public/images/express-gallery.png" className='work-img' /></a>
          <div className='img-desc-div'>
            <h1>Express-Gallery</h1>
            <p className='work-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis excepturi tempore earum praesentium quidem nostrum placeat, ipsum, similique nulla repellat ducimus quis, fuga doloremque, veniam odit maiores totam repellendus aliquam.</p>
          </div>
          <a href='http://pixelmaker.devleague.com/'><img src="./public/images/pixel-painter.png" className='work-img' /></a>
          <div className='img-desc-div'>
            <h1>Pixel-Painter</h1>
            <p className='work-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis excepturi tempore earum praesentium quidem nostrum placeat, ipsum, similique nulla repellat ducimus quis, fuga doloremque, veniam odit maiores totam repellendus aliquam.</p>
          </div>
          <a href='https://docs.google.com/uc?export=download&id=0B0LnbFq3ifAhNWRodVFxZTlhXzQ'><img src="./public/images/disruptArmy.png" className='work-img' /></a>
          <div className='img-desc-div'>
            <h1>Disrupt Army Hackathon</h1>
            <p className='work-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis excepturi tempore earum praesentium quidem nostrum placeat, ipsum, similique nulla repellat ducimus quis, fuga doloremque, veniam odit maiores totam repellendus aliquam.</p>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Work
