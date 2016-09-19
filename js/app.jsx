const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./landing')
const aboutMe = require('./about-me')
const { Router, Route, hashHistory } = require('react-router')

const App = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Landing} />
        <Route path='/about-me' component={aboutMe} />
      </Router>
    )
  }
})
ReactDOM.render(<App />, document.getElementById('app'))
