const React = require('react')
const ResumeHeader = require('./resume-header')
const ResumeDownloader = require('./resume-downloader')
const MobileResumeMessage = require('./resume-pdf')

const Resume = React.createClass({
  render () {
    return (
      <div className='app-container'>
        <div className='header-div'>
          <ResumeHeader />
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
