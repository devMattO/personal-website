const React = require('react')
const TechStack = require('./tech-stack')

const LandingAboutMe = React.createClass({
  render () {
    return (
      <div className='LAM-content-div'>
        <h1 className='LAM-header'>Matt Olsen</h1>
        <h1 className='LAM-header-desc'>Full-Stack JavaScript Developer | Honolulu, HI</h1>
        <div className='LAM-div'>
          <p className='LAM-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis excepturi tempore earum praesentium quidem nostrum placeat, ipsum, similique nulla repellat ducimus quis, fuga doloremque, veniam odit maiores totam repellendus aliquam.
          </p>
          <TechStack />
        </div>
      </div>
    )
  }
})

module.exports = LandingAboutMe
