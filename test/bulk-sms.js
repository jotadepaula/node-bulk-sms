const expect = require("chai").expect;
const Bulk   = require("../lib/Bulk");

describe("Bulk-sms suite tes",function() {
    
    describe('Bulk is valid ?', function () {
        
        it('Instance Bulk Lib', function () {
            expect(Bulk).to.not.be.null;
        });
        
        it('Exists account configs?', function () {
            expect(Bulk.CONFIGS).to.not.be.empty;
        });
        
        it('Exists api url?', function () {
            expect(Bulk.CONFIGS.URL_BULK_SERVICE).to.not.be.empty;
        });
        
        
        it('Exists User name bulk account?', function () {
            expect(Bulk.CONFIGS.USERNAME).to.not.be.empty;
        });
        
        it('Exists password bulk account?', function () {
            expect(Bulk.CONFIGS.PASSWORD).to.not.be.empty;
        });
        
    });
    
})


