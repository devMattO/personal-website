const React = require('react')
const Header = require('./header')
const logo_email = require('../public/images/contact/email.png')
const logo_github = require('../public/images/contact/github-logo.png')
const logo_instagram = require('../public/images/contact/instagram.png')
const logo_linkedin = require('../public/images/contact/linkedin.png')
const logo_medium = require('../public/images/contact/medium.png')
const logo_twitter = require('../public/images/contact/twitter.png')


const social_media_links = [
  {logo: logo_email,
   urlLink: 'mailto:olsen_matthew@yahoo.com'},
  {logo: logo_github,
   urlLink: 'https://github.com/devMattO'},
  {logo: logo_instagram,
   urlLink: 'https://www.instagram.com/devmatto/'},
  {logo: logo_linkedin,
   urlLink: 'https://www.linkedin.com/in/devmatto'},
  {logo: logo_medium,
   urlLink: 'https://medium.com/@mattolsen'},
  {logo: logo_twitter,
   urlLink: 'https://twitter.com/devmatto'}
]

const ContactLinks = React.createClass({
  render () {
    return (
      <div className='app-container'>
        <div className='header-div'>
          <Header />
        </div>
        <div className='contact-links-div'>
          {social_media_links.map((el, index)=>{
              return (
                <a href={el.urlLink} key={index}>
                  <img src={el.logo} className='socialMediaContact' />
                </a>
              )
            })}
        </div>
      </div>
    )
  }
})

module.exports = ContactLinks
