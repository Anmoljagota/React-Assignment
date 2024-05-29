import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { reducer as Products } from "./Products/reducer";
import { reducer as User } from "./User/reducer";
const rootReducer = combineReducers({ Products, User });
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export { store };
