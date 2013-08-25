var sys = require('sys'),
    async = require('async'),
    exec = require('child_process').exec;

var shellLines = function (shells, done) {
    var fns = [];

    shells.forEach(function (shell) {
        if (!shell.command) {
            return;
        }

        fns.push(function (next) {
            sys.print((shell.message || shell.command) + '...');
            exec(shell.command, next);
        });

        fns.push(function (next) {
            sys.print('OK\n'.green);
            next();
        });
    });

    async.series(fns, done);
};

module.exports = shellLines;