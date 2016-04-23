[![Build Status](https://travis-ci.org/jotadepaula/node-bulk-sms.svg?branch=master)](https://travis-ci.org/jotadepaula/node-bulk-sms)
# node-bulk-sms
node-bulk-sms is a module for use of bulk-SMS service for sending text messages using the bulk sms service (http://www.bulksms.com/)

# Install
```javascript
npm install node-bulk-sms 
```

# Usage
```javascript
var bulk = require('node-bulk-sms');

bulk.setUsername('your username');
bulk.setPassword('your password');
bulk.sendMessage('message','cell phone',function(result){
    console.log(result);
});
 
```
# More informations
http://www.bulksms.com/