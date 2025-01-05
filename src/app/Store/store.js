import { createStore, combineReducers } from "redux";
import { reducerSliders } from "./Page-slider/slider";

const reducer = combineReducers({
    showMenu: reducerSliders
})

export const store = createStore(reducer)