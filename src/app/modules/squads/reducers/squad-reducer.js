import * as types from '../actions/squad.actionTypes';

const initialState = {
    saved: false
};

export default function squadReducer(state = initialState, action) {
    switch (action.type) {
        case types.CREATE_SQUAD:
            console.log('in reduccer create squad');
            console.log(action);
            return state;
        case types.CREATE_SQUAD_SUCCESS:
            console.log('in reducer');
            let x = Object.assign({}, state, {saved: true});
            console.log(x);
            return x;
        default:
            return state;
    }
}