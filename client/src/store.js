import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { forgotPasswordReducer, setupprofileReducer, updateProfileReducer, userReducer } from './reducers/userReducer';
import { profReducer } from './reducers/profReducer';

const reducer = combineReducers({
    user: userReducer,
    setupProfile: setupprofileReducer,
    updateProfile: updateProfileReducer,
    forgotPassword: forgotPasswordReducer,
    prof: profReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;