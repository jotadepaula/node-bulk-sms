const CONFIGS = require('../account_setup.json');
const REQUEST = require('request');
module.exports = {
    CONFIGS: CONFIGS,
    validatePhoneNumber: function () {


    },
    sendMessage: function (message, phone,callback) {

        try {
            if (message && phone !== null) {
                var postData = {
                    username: CONFIGS.USERNAME,
                    password: CONFIGS.PASSWORD,
                    message: message,
                    msisdn: phone
                };
                
                REQUEST.post(
                    CONFIGS.URL_BULK_SERVICE,
                    { form: postData },
                    function (err, response, body) {
                        if (!error && response.statusCode == 200) {
                            console.log(response.statusCode);
                            console.log(body);
                            var result = {statusCode: response.statusCode,body: response.body};
                            // return true;
                            // response.send(response.statusCode);
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