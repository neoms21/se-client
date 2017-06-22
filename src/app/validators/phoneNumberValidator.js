const phoneNumberValidator = (values, field) => {
    const errors = {};
    const expr = /^(([0]{1})|([\+][4]{2}))([1]|[2]|[3]|[7]){1}\d{8,9}$/;

    if (!expr.test(values[field])) {
        errors[field] = 'Please provide phone number starting with 0 or +44';
    }

    return errors;
};


export default phoneNumberValidator;
