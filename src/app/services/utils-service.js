
const convertErrorArrayToObject = (array) => {
    let errorDescriptor =  {
        general: [],
        specific: {
        }
    };

    for(let error of array) {
        if(typeof(error) === 'object' && error.hasOwnProperty('name')) {
            errorDescriptor.specific[error.name] = error.message;
        } else {
            errorDescriptor.general.push(error);
        }
    }

    return errorDescriptor;
};

export default convertErrorArrayToObject;
