import { combineReducers } from "redux";

import accountReducer from "./reducers";
const rootReducer = combineReducers({
    accountReducer,
})
export default rootReducer;