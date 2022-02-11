import { createStore, combineReducers, applyMiddleware   } from "redux";
import { Staffs } from "./staffs";
import { Departments } from "./departments";
import { Salary } from './salary';
import thunk from "redux-thunk";
import logger from "redux-logger";

//Store redux
export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            staffs : Staffs,
            departments: Departments,
            salary : Salary
        }),
        applyMiddleware(thunk, logger)
      
    );
    
    return store;
}