const React = require('react')
const { object } = React.PropTypes

const ResumeDownloader = React.createClass({
  getInitialState: function() {
      return {text: ''};
  },
  inputSubmit: function() {
      if (this.state.text === 'download resume' || '"download resume"' || "'download resume'"){
        window.location.href = 'https://docs.google.com/uc?export=download&id=0B0LnbFq3ifAhNWRodVFxZTlhXzQ';
      }
      this.setState({text: ''});
  },
  handleChange: function(evt) {
      this.setState({text: evt.target.value});
  },
  handleKeyDown: function(evt) {
      if (evt.keyCode == 13 ) {
          return this.inputSubmit();
      }
  },
  render () {
    return (
      <div className="root">
        <div className="computerContainer">
          <section className="screenContainer">
            <div className="screenFrame">
              <div className="screen">
                <div className="terminal">
                  <div className="outputContainer"><p>Welcome to my resume downloader!</p><p>Type the command "download resume" & hit "enter"</p></div><br />
                  <div className="currentLine">
                    <span className="prompt">$</span>
                    <div className="inputContainer">
                      <input value={this.state.text} onChange={this.handleChange} ref="userInput" onKeyDown={this.handleKeyDown} className="input" type="text" autoFocus />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bodyDecor">
            <div className="floppyDriveContainer">
              <div className="floppyDrive">
                <div className="floppyShade"></div>
                <div className="floppyShadeDarker"></div>
                <div className="floppySlot"></div>
              </div>
            </div>
            <div className="logoContainer">
              <div className="logo"></div>
            </div>
          </section>
          <section className="bottomDecor">
            <div className="bottomButton"></div>
          </section>
        </div>
      </div>
    )
  }
})

module.exports = ResumeDownloader
