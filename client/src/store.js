import thunk from "redux-thunk";

import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {
    userReducer,

}from "./reducers/userReducer";

const reducer = combineReducers({
    user:userReducer,
});

const middleware = [thunk];
const store = createStore(
    reducer,
    
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;