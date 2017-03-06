
const convertErrorArrayToObject = (array) => {
    let errorDescriptor =  {
        general: [],
        specific: {
        }
    };

    for(let i=0; i <= array.length; i++) {
        const error = array[i];
        if(typeof(error) === 'object') {
            const key = Object.keys(error)[0];
            errorDescriptor.specific[key] = Object.values(error)[0];
        } else {
            errorDescriptor.general.push(error);
        }
    }

    return errorDescriptor;
};

export default convertErrorArrayToObject;
