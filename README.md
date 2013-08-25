shellLines
==============

multi-line shell script for grunt-init.

## install

### from npm

```
npm install shell_lines
```

### from github

```
git clone git://github.com/fnobi/shellLines.git
```

## usage

```
var shellLines = require('shell_lines');

// npm install & bower install
shellLines([{
    command: 'npm install',
    message: 'Installing npm dependencies'
},{
    command: 'bower install',
    message: 'Installing bower dependencies'
}], done);
```
