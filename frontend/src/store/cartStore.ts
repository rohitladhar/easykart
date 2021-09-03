import { applyMiddleware,createStore,combineReducers } from "redux";
import thunk from 'redux-thunk';

import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";
const initialState = {};
const rootReducer = combineReducers({
    cartR:cartReducer,
    filterR:filterReducer
})
export type RootState = ReturnType<typeof rootReducer>
const cartStore = createStore(
    rootReducer,initialState,applyMiddleware(thunk)
);

export default cartStore;

