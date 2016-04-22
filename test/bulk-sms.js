const expect = require("chai").expect;
const Bulk   = require("../lib/Bulk");
const testData = require ('./test-data.json');

describe("Bulk-sms suite tes",function() {
    
    describe('Bulk is valid ?', function () {
        
        it('Instance Bulk Lib', function () {
            expect(Bulk).to.not.be.null;
        });
        
        
        it('Exists api url?', function () {
            expect(Bulk.url_bulk_service).to.not.be.empty;
        });
        
        
        it('Exists User name bulk account?', function () {
            Bulk.setUsername("username");
            expect(Bulk.username).to.not.be.empty;
        });
        
        it('Exists password bulk account?', function () {
            Bulk.setPassword('pass');
            expect(Bulk.password).to.not.be.empty;
        });
        
        
        it('Send message method is valid?', function () {
            expect(Bulk).itself.to.respondTo('sendMessage');
        });                
    })
    
    
    describe('SMS sending method test', function () {
       
       it('Test Send Message', function () {
           Bulk.sendMessage(testData.message,testData.phone,function(response) {
               expect(response).to.not.be.empty;                              
           });
       });
        
    });            
});


