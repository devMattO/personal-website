'use strict';
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
var ENTER_KEY = 13;
var fileSystem = {
    'README.md': 'Welcome to the Macintosh 128K terminal!\nSupported commands are:\n  - ls: list directory contents\n  - cat: concatenate and print files\n  - clear: clear the terminal screen \n',
    'secret1.txt': 'Shhhh!',
    'secret2.txt': 'Zip it!'
};
new (function () {
    function Terminal() {
        _classCallCheck(this, Terminal);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.clearHistory = this.clearHistory.bind(this);
        this.addHistory = this.addHistory.bind(this);
        this.listFiles = this.listFiles.bind(this);
        this.catFile = this.catFile.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this);
        this.history = [];
        this.elements = {
            input: document.querySelector('.input'),
            terminal: document.querySelector('.terminal'),
            outputContainer: document.querySelector('.outputContainer')
        };
        this.prompt = '$';
        this.commands = {
            clear: this.clearHistory,
            ls: this.listFiles,
            cat: this.catFile
        };
        this.elements.input.addEventListener('keydown', this.onKeyDown);
        this.catFile('README.md');
    }
    Terminal.prototype.clearHistory = function clearHistory() {
        this.history = [];
        this.elements.outputContainer.innerHTML = '';
    };
    Terminal.prototype.catFile = function catFile(fileName) {
        if (fileName in fileSystem)
            this.addHistory(fileSystem[fileName]);
        else
            this.addHistory('cat: ' + fileName + ': No such file or directory');
    };
    Terminal.prototype.scrollToBottom = function scrollToBottom() {
        this.elements.terminal.scrollTop = this.elements.terminal.scrollHeight;
    };
    Terminal.prototype.addHistory = function addHistory(output) {
        this.history.push(output);
        var outputText = document.createTextNode(output);
        var outputEl = document.createElement('pre');
        outputEl.classList.add('output');
        outputEl.appendChild(outputText);
        this.elements.outputContainer.appendChild(outputEl);
    };
    Terminal.prototype.listFiles = function listFiles(dir) {
        var output = Object.keys(fileSystem).reduce(function (acc, curr, index) {
            var deliminator = index % 3 === 0 && index !== 0 ? '\n' : '\t';
            return '' + acc + curr + deliminator;
        }, '');
        this.addHistory(output);
    };
    Terminal.prototype.clearInput = function clearInput() {
        this.elements.input.value = '';
    };
    Terminal.prototype.onKeyDown = function onKeyDown(e) {
        if (e.keyCode !== ENTER_KEY)
            return;
        var inputText = this.elements.input.value;
        var inputArray = inputText.split(' ');
        var inputCommand = inputArray[0];
        var arg = inputArray[1];
        this.addHistory(this.prompt + ' ' + inputText);
        this.clearInput();
        if (inputCommand === '')
            return;
        var command = this.commands[inputCommand];
        if (command)
            command(arg);
        else
            this.addHistory('sh: command not found: ' + inputCommand);
        this.scrollToBottom();
    };
    return Terminal;
}())();