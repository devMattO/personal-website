const React = require('react')
const Header = require('./header')
const ResumeDownloader = require('./resume-downloader')
const MobileResumeMessage = require('./resume-pdf')

const Resume = React.createClass({
  render () {
    return (
      <div className='app-container'>
        <div className='header-div'>
          <Header />
        </div>
        <div className='content-div'>
          <ResumeDownloader />
          <MobileResumeMessage />
        </div>
      </div>
    )
  }
})

module.exports = Resume
