const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./landing')
const style = require('../scss/styles.scss')
const { Router, Route, hashHistory } = require('react-router')

const App = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Landing} />
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
