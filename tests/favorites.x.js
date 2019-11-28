const favorites = require('../cmd/favorites');
const fs = require('fs');

jest.mock('fs', () => ({
    readFileSync: jest.fn()
}));



describe('FileSystem test suite', function() {
    test('Should return the parsed JSON from a file specified as param', function(done) {
        fs.readFileSync.mockReturnValue('{ "test": 1 }');
        const result = favorites('test.json');
        expect(result).toEqual({ "test": 1 });
        done();
    });
});