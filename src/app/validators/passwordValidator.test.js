import pwdValidator from './passwordValidator';

describe('Password validator tests', () => {

    it("should give error for invalid password", () => {


        const result = pwdValidator({'pwd': 'abcdef'}, 'pwd');
        expect(result).toEqual({'pwd': 'Password must be minimum of 8 letters, at least one letter and one number'});
    });

    it("should return empty object when valid password", () => {
        const result = pwdValidator({'pwd': 'abcdefg6'}, 'pwd');
        expect(result).toEqual({});
    })

});

