const React = require('react')
const Header = require('./header')
const techStackList = require('./techStackInfo')
const techStackInfo = techStackList();
const { Link } = require('react-router')

const TechStack = React.createClass({
  render () {
    return (
        <div className='techStack-content-div'>
          <div className="tech-logos">
            {techStackInfo.map((el, index)=>{
              return (
                <a href={el.urlLink} key={index}>
                  <img src={el.logo} className='imgTagLogos' />
                </a>
              )
            })}
          </div>
        </div>
    )
  }
})

module.exports = TechStack
