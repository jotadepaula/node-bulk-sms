const REQUEST = require('request');
module.exports = {
    url_bulk_service  : "http://usa.bulksms.com/eapi/submission/send_sms/2/2.0",
    username          : "",
    password          : "",
    
    setUsername: function (user) {
        this.username = user;
    },
    
    getUsername: function () {
        return this.username;
    },
    
    setPassword: function (pass) {
        this.password = pass;
    },
    
    getPassword: function () {
        return this.password;
    },
       
    validatePhoneNumber: function () {


    },
    sendMessage: function (message, phone,callback) {

        try {
            if (message && phone !== null) {
                var postData = {
                    username: this.username,
                    password: this.password,
                    message: message,
                    msisdn: phone
                };
                
                REQUEST.post(
                    this.url_bulk_service,
                    { form: postData },
                    function (err, response, body) {                        
                        if (!err && response.statusCode == 200) {                                                        
                            var result = {statusCode: response.statusCode,body: response.body};                             
                            return callback(result);
                        }else{
                            console.log(err);
                        }
                    }
                );
            }
        } catch (error) {
            console.error(error);
        }
    }
}