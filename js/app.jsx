const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./landing')
const Work = require('./work')
const TechStack = require('./tech-stack')
const Pictures = require('./pictures')
const Contact = require('./contact')
import style from '../scss/styles.scss'
const { Router, Route, hashHistory } = require('react-router')

const App = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Landing} />
        <Route path='/work' component={Work} />
        <Route path='/tech-stack' component={TechStack} />
        <Route path='/pictures' component={Pictures} />
        <Route path='/contact' component={Contact} />
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
