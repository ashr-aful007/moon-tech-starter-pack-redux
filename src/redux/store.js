import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from "./reducers/productReducer";
import rootReducr from "./reducers/rootReducer";

const store = createStore(rootReducr, composeWithDevTools());

export default store;
