var test = require('tap').test;
var sentiment = require('../../lib/index');

var input = 'C\'était vraiment bien 😃';
var options = {
    language: 'fr',
    extras: {
        'bien': 100
    }
};

var result = sentiment(input, options);

test('synchronous inject FR', function (t) {
    t.type(result, 'object');
    t.equal(result.score, 102);
    t.equal(result.comparative, 25.5);
    t.equal(result.tokens.length, 4);
    t.equal(result.words.length, 2);
    t.end();
});
