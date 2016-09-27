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
          <form className='contact-form' action='/submit/:mail'>
            <div className='contact-title'><h1 className='LAM-header'>Contact</h1></div>
            <input type='text' placeholder='Name' />
            <input type='text' name='email' placeholder='Youremail@address.com' />
            <input type='text' placeholder='Subject' />
            <textarea type='text' rows="4" cols="50" name="comment" form="usrform" placeholder='Enter text here...'></textarea>
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
    )
  }
})

module.exports = Contact
