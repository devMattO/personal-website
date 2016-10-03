const React = require('react')
const Header = require('./header')
const { Link } = require('react-router')

let sendPost = ()=>{

}

const Contact = React.createClass({
  getInitialState: function() {
    return {senderName: '', senderEmail: '', mailBody: '', mailSubject: ''};
  },
  handleSenderName: function(e) {
    this.setState({senderName: e.target.value});
  },
  handleEmailSender: function(e) {
    this.setState({senderEmail: e.target.value});
  },
  handleMailSubject: function(e) {
    this.setState({mailSubject: e.target.value});
  },
  handleMailBody: function(e) {
    this.setState({mailBody: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault()
    const req = new XMLHttpRequest();
    req.addEventListener('load', (res) => {
        if(JSON.parse(res.currentTarget.responseText)){
        console.log('it worked')
      }
    })
    req.open('POST', '/#/contact/contact-me', true)
    req.setRequestHeader("Content-Type", "application/json")
    req.send(JSON.stringify({
      "key": 'value from header',
    }))
  },
  render () {
    return (
      <div className='app-container'>
        <div className='header-div'>
          <Header />
        </div>
        <div className='form-div'>
          <form className='contact-form' onSubmit={this.handleSubmit} >
            <div className='contact-title'><h1 className='LAM-header'>Contact</h1></div>
            <input className='contact-input' value={this.state.senderName} onChange={this.handleSenderName} type='text' name='sender-name' placeholder='Name' />
            <input className='contact-input' value={this.state.senderEmail} onChange={this.handleEmailSender} type='text' name='email' placeholder='YourEmail@address.com' />
            <input className='contact-input' value={this.state.mailSubject} onChange={this.handleMailSubject} type='text' name='mail-subject' placeholder='Subject' />
            <textarea type='text' rows="4" cols="50" value={this.state.mailBody} onChange={this.handleMailBody} name="mail-body" placeholder='Enter text here...'></textarea>
            <input type='submit' value='Post' />
          </form>
        </div>
      </div>
    )
  }
})

module.exports = Contact
