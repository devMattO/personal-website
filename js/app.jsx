const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./landing')
import Work from './work'
const TechStack = require('./tech-stack')
const Resume = require('./resume')
const ContactLinks = require('./contact-links')
import style from '../scss/styles.scss'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import icoFile from '../public/favicon.ico'

const App = React.createClass({
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Landing} />
        <IndexRoute component={Landing}/>
        <Route path='/work' component={Work} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={ContactLinks} />
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
