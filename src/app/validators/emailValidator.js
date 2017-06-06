const emailValidator = (values, field) => {
    const errors = {};
    const expr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!expr.test(values[field])) {
        errors[field] = 'Please provide valid email address';
    }

    return errors;
};


export default emailValidator;