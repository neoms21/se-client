export const validateRequiredFields = (values, requiredFields) =>{
    const errors = {};

    // const requiredFields = ['squadName'];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = field + ' is required';
        }
    });

    return errors;
};