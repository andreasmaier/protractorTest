var baseUrl = "http://localhost:8899";

describe('CashLoad Flow', function () {
    it('test setup', function () {
        browser.driver.manage().window().setSize(800, 1200);
        browser.driver.get(baseUrl);
    });

    userSeesHomeScrees();
    userSeesNoTodos();

    function userSeesHomeScrees() {
        it('takes the user to the home page by default', function () {
            expect($('.home-header').getText()).toContain('These are your Todos:');
        });
    }

    function userSeesNoTodos() {
        it('does not have any Todos by default', function () {
            element.all(by.repeater('todo in todos')).count().then(function(count) {
                expect(count).toBe(0);
            });
        });
    }
});