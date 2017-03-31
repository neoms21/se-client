export const validateRequiredFields = (values, requiredFields) =>{
    const errors = {};
    console.log(requiredFields);

    // const requiredFields = ['squadName'];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = field + ' is Required';
        }
    });

    return errors;
};