const concatClassNames = require('../concatClassNames.js');
const assert = require('assert');

describe('concatClassNames', () => {
    it('should concat strings into classes', () => {
        const result = concatClassNames('a', 's', 'd', 'f');
        assert.equal(result, 'a s d f');
    });
    it('should concat arrays of strings', () => {
        const result = concatClassNames(['a', 's'], ['d', 'f']);
        assert.equal(result, 'a s d f');
    });
    it('should concat arrays of strings and single strings', () => {
        const result = concatClassNames(['a', 's'], 'd', 'f');
        assert.equal(result, 'a s d f');
    });
    it('should concat classes conditionally', () => {
        const result = concatClassNames('foo', '', 'bar', false, 'baz', 0);
        assert.equal(result, 'foo bar baz');
    });
    it('should concat classes conditionally in arrays', () => {
        const result = concatClassNames('foo', '', 'bar', false, 'baz', 0, [
            'qwerty',
            false,
            'asdfg',
            0,
        ]);
        assert.equal(result, 'foo bar baz qwerty asdfg');
    });
});
