import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { authReducer } from './auth/reducer';
import { projectReducer } from "./project/reducer";
import { taskReducer } from "./task/reducer";
import { userReducer } from "./user/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    task: taskReducer,
    user: userReducer,
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