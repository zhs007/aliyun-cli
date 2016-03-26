"use strict";

var fs = require('fs');

function checkParams(argv) {
    if (arguments.length > 1) {
        for (let i = 1; i < arguments.length; ++i) {
            if (!argv.hasOwnProperty(arguments[i])) {
                console.log('need param ' + arguments[i]);

                return false;
            }
        }
    }

    return true;
}

function procOSSPath(osspath) {
    while (osspath.charAt(0) == '/') {
        osspath = osspath.slice(1);
    }

    while (osspath.charAt(osspath.length - 1) == '/') {
        osspath = osspath.slice(0, osspath.length - 1);
    }

    return osspath;
}

function isDir(strpath) {
    if (fs.existsSync(strpath)) {
        let stat = fs.statSync(strpath);
        return stat.isDirectory();
    }

    return false;
}

exports.checkParams = checkParams;
exports.procOSSPath = procOSSPath;
exports.isDir = isDir;