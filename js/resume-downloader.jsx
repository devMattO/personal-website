const React = require('react')

const ResumeDownloader = React.createClass({
  render () {
    return (
      <div className="root">
        <main className="computerContainer">
          <section className="screenContainer">
            <div className="screenFrame">
              <div className="screen">
                <div className="terminal">
                  <div className="outputContainer"></div>
                  <div className="currentLine">
                    <span className="prompt">$</span>
                    <div className="inputContainer">
                      <input className="input" type="text" autoFocus />
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
        </main>
      </div>
    )
  }
})

module.exports = ResumeDownloader
