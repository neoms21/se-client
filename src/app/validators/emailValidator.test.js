import emailValidator from './emailValidator';

describe('Email validator tests', () => {

    it("should give error for invalid email address", () => {


        const result = emailValidator({'emailAddress': 'skalsl'}, 'emailAddress');
        expect(result).toEqual({'emailAddress': 'Please provide valid email address'});
    });

    it("should return empty object valid email address", () => {
        const result = emailValidator({'emailAddress': 'a@b.com'}, 'emailAddress');
        expect(result).toEqual({});
    })

});
