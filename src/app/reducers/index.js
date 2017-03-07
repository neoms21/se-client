import {combineReducers} from 'redux';
import userReducer from "../modules/user/reducers/user-reducer";
import squads from "../modules/squads/reducers/squad-reducer";


const rootReducer = combineReducers({
    userReducer,
    squads

});

export default rootReducer;
