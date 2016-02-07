exports.logE = logE;
exports.logW = logW;
exports.logI = logI;
exports.logD = logD;
exports.logWriteI = logWriteI;
exports.mkdirsSync = mkdirsSync;
exports.mkdirsIfNotExistSync = mkdirsIfNotExistSync;

var fs = require('fs');
var mkdirp = require('mkdirp');
var gconsole = require('gradle-console');

// 0: error, 1: warning, 2: info, 3: debug
function logE(level, message) {
  if (0 <= level) {
    gconsole.log(message);
  }
}

function logW(level, message) {
  if (1 <= level) {
    gconsole.log(message);
  }
}

function logI(level, message) {
  if (2 <= level) {
    gconsole.log(message);
  }
}

function logD(level, message) {
  if (3 <= level) {
    gconsole.log(message);
  }
}

function logWriteI(level, message) {
  if (2 <= level) {
    process.stdout.write(message);
  }
}

function mkdirsSync(dir) {
  mkdirp.sync(dir);
}

function mkdirsIfNotExistSync(dir) {
  if (!fs.existsSync(dir)) {
    mkdirsSync(dir);
  }
}
