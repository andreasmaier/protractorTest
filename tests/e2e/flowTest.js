var baseUrl = "http://localhost:8899";

describe('CashLoad Flow', function () {
    it('test setup', function () {
        browser.driver.manage().window().setSize(800, 1200);
        browser.driver.get(baseUrl);
    });

    userSeesHomeScrees();

    function userSeesHomeScrees() {
        it('takes the user to the home page by default', function () {
            expect($('.home-header').getText()).toContain('These are your Todos:');
        });
    }
});