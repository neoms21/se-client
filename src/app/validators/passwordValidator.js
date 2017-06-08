const passwordValidator = (values, field) => {
    const errors = {};
    const expr = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if (!expr.test(values[field])) {
        errors[field] = 'Password must be minimum of 8 letters, at least one letter and one number';
    }

    return errors;
};


export default passwordValidator;
