const React = require('react')
const Header = require('./header')

const social_media_links = [
  {logo: './public/images/contact/email.png',
   urlLink: 'mailto:olsen_matthew@yahoo.com'},
  {logo: './public/images/contact/github-logo.png',
   urlLink: 'https://github.com/devMattO'},
  {logo: './public/images/contact/instagram.png',
   urlLink: 'https://www.instagram.com/devmatto/'},
  {logo: './public/images/contact/linkedin.png',
   urlLink: 'https://www.linkedin.com/in/devmatto'},
  {logo: './public/images/contact/medium.png',
   urlLink: 'https://medium.com/@mattolsen'},
  {logo: './public/images/contact/twitter.png',
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
