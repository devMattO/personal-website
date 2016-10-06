const React = require('react')
const computers = require('../public/images/computers.png')

const MobileResumeMessage = React.createClass({
  render () {
    return (
      <div className='resume-too-small-container'>
        <img src={computers} /><br />
        <p>Please use this page in your desktop/laptop's browser to download my resume!</p>
      </div>
    )
  }
})

module.exports = MobileResumeMessage
