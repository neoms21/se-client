import * as types from '../actions/actionTypes';

export default function userReducer(state = [], action) {
    switch (action.type) {
        case types.REGISTER_USER:
            return {...state, ...action.userDetails};
        default:
            return state;
    }
}
