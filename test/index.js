var Lab = require('lab');
var helloWorld = require('../api/index.js');

var describe = Lab.experiment;
var it = Lab.test;
var expect = Lab.expect;
var before = Lab.before;
var after = Lab.after;

describe('Hello World: ', function () {

    it('returns hello world greeting', function (done) {

		helloWorld.inject('/hello', function (res) {
			expect(res.result).to.exist;
			expect(res.statusCode).to.equal(200);
			expect(res.payload).to.contain('hello world');
			done();
		});
    });
});
