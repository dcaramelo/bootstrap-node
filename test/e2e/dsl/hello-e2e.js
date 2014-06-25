'use strict';

describe("hello world", function() {

    beforeEach(function() {
        browser.get('http://127.0.0.1:9000/');
    });

    it("should work", function() {

        expect(element(By.css('body')).getText()).toContain("Hello World !");
    });

});