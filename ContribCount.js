include('auth.js');

var request = require('request');



request.get('http://some.server.com/').auth('username', 'password', false);
