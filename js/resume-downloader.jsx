const React = require('react')

const ResumeDownloader = React.createClass({
  render () {
    return (
      <div class="root">
        <main class="computerContainer">
          <section class="screenContainer">
            <div class="screenFrame">
              <div class="screen">
                <div class="terminal">
                  <div class="outputContainer"></div>
                  <div class="currentLine">
                    <span class="prompt">$</span>
                    <div class="inputContainer">
                      <input class="input" type="text" autofocus/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="bodyDecor">
            <div class="floppyDriveContainer">
              <div class="floppyDrive">
                <div class="floppyShade"></div>
                <div class="floppyShadeDarker"></div>
                <div class="floppySlot"></div>
              </div>
            </div>
            <div class="logoContainer">
              <div class="logo"></div>
            </div>
          </section>
          <section class="bottomDecor">
            <div class="bottomButton"></div>
          </section>
        </main>
      </div>
    )
  }
})

module.exports = ResumeDownloader