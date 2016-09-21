const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./landing')
const work = require('./work')
const techStack = require('./tech-stack')
const pictures = require('./pictures')
import style from '../scss/styles.scss'
const { Router, Route, hashHistory } = require('react-router')

const App = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Landing} />
        <Route path='/work' component={work} />
        <Route path='/tech-stack' component={techStack} />
        <Route path='/pictures' component={pictures} />
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
