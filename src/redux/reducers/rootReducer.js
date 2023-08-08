import {combineReducers} from "redux"
import productReducer from "./productReducer"
import { filterReducer } from "./filterReducer"



const rootReducr = combineReducers({
     product: productReducer,
     filter: filterReducer
})

export default rootReducr;