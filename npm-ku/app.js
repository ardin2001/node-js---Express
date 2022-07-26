const validator = require('validator');

const email = 'ardin@gmail.com';
console.log(validator.isEmail(email));
console.log(validator.isMobilePhone('085815765649','id-ID'));