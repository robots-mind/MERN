const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
    let errors = {};

    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.status = !isEmpty(data.status) ? data.status : '';

    if(!Validator.isLength(data.handle, {min:2,max:40})) {
        errors.handle = ' Handle needs to between 2 and 4 characters '
    }
    if(!Validator.isLength(data.handle, {min:2,max:40})) {
        errors.handle = ' Handle needs to between 2 and 4 characters '
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
