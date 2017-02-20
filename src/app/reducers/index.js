import {combineReducers} from 'redux';
import userReducer from "../modules/user/reducers/user-reducer";
import squadReducer from "../modules/squads/reducers/squad-reducer";


const rootReducer = combineReducers({
    userReducer,
    squadReducer

});

export default rootReducer;
