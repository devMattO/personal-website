const React = require('react')

const MobileResumeMessage = React.createClass({
  render () {
    return (
      <div className='resume-too-small-container'>
        <img src='./public/images/computers.png' /><br />
        <p>Please use this page in your desktop/laptop's browser to download my resume!</p>
      </div>
    )
  }
})

module.exports = MobileResumeMessage
