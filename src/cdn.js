"use strict";

var ALY = require('aliyun-sdk');
var util = require('util');

function newCDN(keyid, accesskey) {
    let cdnobj = new ALY.CDN({
        accessKeyId: keyid,
        secretAccessKey: accesskey,
        endpoint: 'https://cdn.aliyuncs.com',
        apiVersion: '2014-11-11'
    });

    return cdnobj;
}

// callback(err, res)
function refreshFile(cdnobj, url, filename, callback) {
    cdnobj.refreshObjectCaches({
        ObjectType: 'File',
        ObjectPath: url + '/' + filename
    }, function (err, res) {
        callback(err, res);
    });
}

exports.newCDN = newCDN;
exports.refreshFile = refreshFile;