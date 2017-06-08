const letterValidator = (values, field) => {
    const errors = {};
    const expr = /^[a-zA-Z]+$/;
    if (!expr.test(values[field])) {
        errors[field] = 'Please only use letters';
    }

    return errors;
};


export default letterValidator;
