const React = require('react')
const Header = require('./header')
const { Link } = require('react-router')

const Contact = React.createClass({
  render () {
    return (
      <div className='app-container'>
        <div className='header-div'>
          <Header />
        </div>
        <div className='form-div'>
          <form className='contact-form' action='/contact' method='get' >
            <div className='contact-title'><h1 className='LAM-header'>Contact</h1></div>
            <input className='contact-input' type='text' name='sender-name' placeholder='Name' />
            <input className='contact-input' type='text' name='email' placeholder='YourEmail@address.com' />
            <input className='contact-input' type='text' name='mail-subject' placeholder='Subject' />
            <textarea type='text' rows="4" cols="50" name="mail-body" placeholder='Enter text here...'></textarea>
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
    )
  }
})

module.exports = Contact
