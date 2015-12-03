"use strict";

var ALY = require('aliyun-sdk');
var util = require('util');
var fs = require('fs');

function getCityName(city) {
    if (city == 'hz') {
        return 'hangzhou';
    }
    else if (city == 'bj') {
        return 'beijing';
    }
    else if (city == 'qd') {
        return 'qingdao';
    }
    else if (city == 'sz') {
        return 'shenzhen';
    }
    else if (city == 'hk') {
        return 'hongkong';
    }

    return city;
}

function getEndPoint(endpoint, islocal) {
    let fstr = getCityName(endpoint);

    if (islocal) {
        return util.format('http://oss-cn-%s-internal.aliyuncs.com', fstr);
    }

    return util.format('http://oss-cn-%s.aliyuncs.com', fstr);
}

function newOSS(keyid, accesskey, endpoint, islocal) {
    let ossobj = new ALY.OSS({
        accessKeyId: keyid,
        secretAccessKey: accesskey,
        endpoint: getEndPoint(endpoint, islocal),
        apiVersion: '2013-10-15'
    });

    return ossobj;
}

// callback(err, data)
function updFile(ossobj, bucket, srcfilename, destpath, callback) {
    let buf = fs.readFileSync(srcfilename);

    ossobj.putObject({
        Bucket: bucket,
        Key: destpath + '/' + srcfilename,
        Body: buf
    }, function (err, data) {
        callback(err, data);
    });
}

exports.newOSS = newOSS;
exports.updFile = updFile;