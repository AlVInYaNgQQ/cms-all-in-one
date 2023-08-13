
// import os module
const os = require("os");

// get host name
const hostname = os.hostname();

exports.errorcode = ((code, custom_msg = null) => {
    const _code = {
        1000: 'Success',
        2001: 'Data not found',
    }
    return {code: code, message: (_code[code] ? _code[code] : custom_msg)};
});

exports.hostname = hostname;