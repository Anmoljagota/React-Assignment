import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { reducer as Products } from "./reducer";
const rootReducer = combineReducers({ Products });
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export { store };
