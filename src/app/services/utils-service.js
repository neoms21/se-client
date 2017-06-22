import * as _ from 'lodash';

const convertErrorArrayToObject = (array) => {
  let errorDescriptor = {
    generalErrors: [],
    fieldErrors: {}
  };
  if (!array)
    return errorDescriptor;

  for (let i = 0; i < array.length; i++) {
    const error = array[i];
    if (typeof(error) === 'object') {
      const key = Object.keys(error)[0];
      errorDescriptor.fieldErrors[key] = error[key];
    } else {
      errorDescriptor.generalErrors.push(error);
    }
  }

  return errorDescriptor;
};

const isNil = (source) => {
  return _.isNil(source);
};

export { convertErrorArrayToObject, isNil };


