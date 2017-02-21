const React = require('react')
const Header = require('./header')
const { Link } = require('react-router')
const newCoders = require('../public/images/new-coders.png')
const expressGallery = require('../public/images/express-gallery.png')
const pixelPainter = require('../public/images/pixel-painter.png')
const disruptArmy = require('../public/images/disruptArmy.png')
import HVM from '../public/images/hvm.png'
import YA from '../public/images/YA.png'

const Work = React.createClass({
  render () {
    return (
      <div className='app-container'>
        <div className='header-div'>
          <Header />
        </div>
        <div className='work-div'>
          <a target="_blank" href='https://yasukoabeshima.com'><img src={YA} className='work-img' /></a>
          <div className='img-desc-div'>
            <h1>Yasuko Abeshima</h1>
            <p className='work-desc'>
              A single-page web app for an established watercolor artist from Manoa Valley, Oahu.
              Designed, Developed and Deployed. <br />
              Tech Stack: React, Express, NodeJS
            </p>
          </div>
          <a target="_blank" href='https://highvoltagemedia.tv'><img src={HVM} className='work-img' /></a>
          <div className='img-desc-div'>
            <h1>High Votage Media</h1>
            <p className='work-desc'> A single-page web app for an rising video production company. Designed, Developed and Deployed.<br /> Tech Stack: React, Express, NodeJS </p>
          </div>
          <a target="_blank" href='http://www.newcoders.xyz'><img src={newCoders} className='work-img' /></a>
          <div className='img-desc-div'>
            <h1>New Coders</h1>
            <p className='work-desc'>This is a single-page web app (SPA) that we created for new coders to find information on other people who are also just beginning programming. This was completed with a team of four people. My contributions included the entire third page development and styling, and implementing a GraphQL server that anyone can use to easily receive specific data from the survey. Tech Stack: JavaScript, Angular 1.5, Express, C3, Sequelize, GraphQL, PostgreSQL, and Sass.</p>
          </div>
          <a target="_blank" href='https://expressgallery.herokuapp.com'><img src={expressGallery} className='work-img' /></a>
          <div className='img-desc-div'>
            <h1>Express-Gallery</h1>
            <p className='work-desc'>This is a custom built Content Management System (CMS). Users can register with our site and create posts much like Tumblr or Instagram. Tech Stack: JavaScript, DOM, Node.js, PostgreSQL, Sequelize, Express, Jade, Sass, Passport, Gulp, BCrypt</p>
          </div>
          <a target="_blank" href='http://pixelmaker.devleague.com/'><img src={pixelPainter} className='work-img' /></a>
          <div className='img-desc-div'>
            <h1>Pixel-Painter</h1>
            <p className='work-desc'>This project used an Arduino Uno, LED Matrix, and a Raspberry Pi to link real time updates on our web app to the hardware. More on this entire project <a target="_blank" href='https://medium.com/@mattolsen/honolulu-mini-maker-faire-2016-a209e1ded866#.hggsfuyor'>here</a></p>
          </div>
          <a href='http://xdisruptarmyx.herokuapp.com/'><img src={disruptArmy} className='work-img' /></a>
          <div className='img-desc-div'>
            <h1>Disrupt Army Hackathon</h1>
            <p className='work-desc'>This hackathon challenged us to visualize the schedules of top ranking Army generals. The goal was to make a single page application that was easy to interact with so that the Four Star General would be able to analyze where his generals are spending their time and where adjustments could be made in times of crisis or emergency. I wrote an algorithm that takes in all of the data and splits it into different charts by general. As opposed to other teams, our solution is scalable and ready for more than just sample data. Our tech stack included React, Express.js, Highcharts, and Webpack.</p>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Work
