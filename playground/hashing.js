const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = 'password1!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$I71yaIgLzlefDxXW9LahzO0SpvBAicVJd/AMD.G9tW2l1i0m9bq.a';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);
// var message = "I am user number 3";
// var hash = SHA256(message);

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecretstring').toString()
// };

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecretstring').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data may have been tampered with');
// }