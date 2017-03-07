import {combineReducers} from 'redux';
import userReducer from "../modules/user/reducers/user-reducer";


const rootReducer = combineReducers({
    userReducer

});

export default rootReducer;
