const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./landing')
const Work = require('./work')
const TechStack = require('./tech-stack')
const Resume = require('./resume')
const ContactLinks = require('./contact-links')
import style from '../scss/styles.scss'
const { Router, Route, hashHistory } = require('react-router')

const App = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Landing} />
        <Route path='/work' component={Work} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={ContactLinks} />
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
