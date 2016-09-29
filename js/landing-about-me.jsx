const React = require('react')
const TechStack = require('./tech-stack')

const LandingAboutMe = React.createClass({
  render () {
    return (
      <div className='LAM-content-div'>
        <img src="./public/images/Matt.jpg" className='matt-headshot' />
        <h1 className='LAM-header'>Matt Olsen</h1>
        <h1 className='LAM-header-desc'>Full-Stack JavaScript Developer | Honolulu, HI</h1>
        <div className='LAM-div'>
          <p className='LAM-text'>
            I am a passionate developer who enjoys building fast, responsive, and powerful websites. I am currently searching for a team that can help me grow as a developer while I can contribute my skills to the overall goal. I have the burning desire to persevere through these challenges and have my work live up to my obsessive, pixel-pushing standards.
          </p><br />
          <p className='LAM-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis excepturi tempore earum praesentium quidem nostrum placeat, ipsum, similique nulla repellat ducimus quis, fuga doloremque, veniam odit maiores totam repellendus aliquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis excepturi tempore earum praesentium quidem nostrum placeat, ipsum, similique nulla repellat ducimus quis, fuga doloremque, veniam odit maiores totam repellendus aliquam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis excepturi tempore earum praesentium quidem nostrum placeat, ipsum, similique nulla repellat ducimus quis, fuga doloremque, veniam odit maiores totam repellendus aliquam.
          </p><br />
          <p className='LAM-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis excepturi tempore earum praesentium quidem nostrum placeat, ipsum, similique nulla repellat ducimus quis, fuga doloremque, veniam odit maiores totam repellendus aliquam.
          </p><br />
          <div className='techProfDiv'>
            <h1 className='techProfHeader'>Technical Proficiencies:</h1>
          </div>
          <TechStack />
        </div>
      </div>
    )
  }
})

module.exports = LandingAboutMe
