const fs = require('fs');

exports.grantPermission = (path) => {
    fs.chmodSync(path, 0o755);
};