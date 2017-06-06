
import lettersValidator from './lettersValidator';

describe('Letters validator tests', () => {

    it("should give error if anything other than letter is entered", () => {

        const result = lettersValidator({'prop': 's1kalsl'}, 'prop');
        expect(result).toEqual({'prop': 'Please only use letters'});
    });

    it("should return empty object if only letters", () => {
        const result = lettersValidator({'prop': 'sasassasa'}, 'prop');
        expect(result).toEqual({});
    })

});
