const React = require('react')
const TechStack = require('./tech-stack')
const devmattoHeadshot = require('../public/images/Matt.jpg')

const LandingAboutMe = React.createClass({
  render () {
    return (
      <div className='LAM-content-div'>
        <img src={devmattoHeadshot} className='matt-headshot' />
        <h1 className='LAM-header'>Matt Olsen</h1>
        <h1 className='LAM-header-desc'>Freelance Web Developer | Orange County, CA </h1>
        <div className='LAM-div'>
          <p className='LAM-text'>
            I am a passionate developer who enjoys building fast, responsive, and powerful websites. I am currently searching for a team that can help me grow as a developer while I can contribute my skills to the overall goal. I have the burning desire to persevere through these challenges and have my work live up to my obsessive, pixel-pushing standards.
            So why was I so drawn to programming? I think it’s because I love the challenge. I want to prove myself. I want to get better.
          </p><br />
          <p className='LAM-text'>
            I have worked on pair-programming and group projects with teams that had to deliver live code within a short deadline.
            I presented one of my team's project at a State of Hawaii Hackathon (HACC) with over 350 people in attendance.
            DevLeague was well presented and the Governor Ige of HI and his tech team were present.
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
