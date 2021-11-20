import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { authReducer } from './auth/reducer';
import { usersReducer } from "./users/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
});

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );

    return store;
}