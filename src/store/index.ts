import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { authReducer } from './auth/reducer';
import { projectReducer } from "./project/reducer";
import { taskReducer } from "./task/reducer";
import { userReducer } from "./user/reducer";
import { LOG_OUT } from "./auth/types";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    task: taskReducer,
    user: userReducer,
});

export const dispatchWrapper = (method: any, params: any, typeDispatch: any) => async (dispatch: any) => {
    const resultResponse = await method(params);
    const { data, response } = resultResponse;
    if (data?.result) return dispatch({ type: typeDispatch, payload: data.result });
    if (response?.status === 401) return  dispatch({ type: LOG_OUT})
  }

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );

    return store;
}