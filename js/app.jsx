const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./landing')
const aboutMe = require('./about-me')
const projects = require('./projects')
const skills = require('./skills')
const pictures = require('./pictures')
const { Router, Route, hashHistory } = require('react-router')

const App = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Landing} />
        <Route path='/about-me' component={aboutMe} />
        <Route path='/projects' component={projects} />
        <Route path='/skills' component={skills} />
        <Route path='/pictures' component={pictures} />
      </Router>
    )
  }
})
ReactDOM.render(<App />, document.getElementById('app'))
