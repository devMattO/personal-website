const React = require('react')
const Header = require('./header')
const ResumeDownloader = require('./resume-downloader')

const Resume = React.createClass({
  render () {
    return (
      <div className='app-container'>
        <div className='header-div'>
          <Header />
        </div>
        <div className='content-div'>
          <ResumeDownloader />
        </div>
      </div>
    )
  }
})

module.exports = Resume
