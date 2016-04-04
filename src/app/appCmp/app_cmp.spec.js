System.register(["./app_cmp"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_cmp_1;
    return {
        setters:[
            function (app_cmp_1_1) {
                app_cmp_1 = app_cmp_1_1;
            }],
        execute: function() {
            describe('1st tests', function () {
                it('true is true', function () { return expect(true).toEqual(true); });
                it('null is not the same thing as undefined', function () { return expect(null).not.toEqual(undefined); });
            });
            describe("AppComponent", function () {
                it("Should have name and surname", function () {
                    var user = new app_cmp_1.AppComponent();
                    expect(user.name).toEqual("Sourrue");
                    expect(user.surname).toEqual("Kévin");
                });
            });
        }
    }
});
