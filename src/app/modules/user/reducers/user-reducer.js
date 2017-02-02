import * as types from '../actions/actionTypes';

const initialState = {
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.REGISTER_USER:
            return { isLoading: true, ...state};
        default:
            return state;
    }
}
