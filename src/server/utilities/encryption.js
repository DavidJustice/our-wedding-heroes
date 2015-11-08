'use strict'; // eslint-disable-line

const crypto = require('crypto');

exports.createSalt = () => {
    return crypto.randomBytes(128).toString('base64');
};

exports.hashPassword = (salt, password) => {
    const hmac = crypto.createHmac('sha1', salt);

    return hmac.update(password).digest('hex');
};
