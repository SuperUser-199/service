import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allProfsReducer, forgotPasswordReducer, setupprofileReducer, updateProfileReducer, userReducer } from './reducers/userReducer';
import { newServiceReducer,newCategoryReducer } from './reducers/serviceReducer';
import { addServiceToCartReducer, getServicesReducer } from './reducers/cartReducer';
import { getAllProfsOfACategoryReducer, getAProfessionalReducer } from './reducers/profReducer';
import { getAnOrderDetailsReducer, getOrderDetailsReducer, placeOrderReducer } from './reducers/orderReducer';

const reducer = combineReducers({
    user: userReducer,
    setupProfile: setupprofileReducer,
    updateProfile: updateProfileReducer,
    forgotPassword: forgotPasswordReducer,
    allProfs: allProfsReducer,
    newService: newServiceReducer,
    newCategory: newCategoryReducer,
    cart: addServiceToCartReducer,
    servicesInCart: getServicesReducer,
    getProfsByCategory: getAllProfsOfACategoryReducer,
    getAProfessional: getAProfessionalReducer,
    newOrder: placeOrderReducer,
    getOrders: getOrderDetailsReducer,
    getAnOrder: getAnOrderDetailsReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;