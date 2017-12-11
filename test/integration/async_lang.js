var test = require('tap').test;
var sentiment = require('../../lib/index');

var dataset = 'C\'était vraiment bien 😃';
sentiment(dataset, 'fr', function (err, result) {
    test('asynchronous positive FR text', function (t) {
        t.type(result, 'object');
        t.equal(result.score, 5);
        t.equal(result.comparative, 1.25);
        t.equal(result.tokens.length, 4);
        t.equal(result.words.length, 2);
        t.end();
    });
});
