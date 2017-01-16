import {combineReducers} from 'redux';
import userReducer from "../modules/user/reducers/userReducer";


const rootReducer = combineReducers({
    userReducer

});

export default rootReducer;
