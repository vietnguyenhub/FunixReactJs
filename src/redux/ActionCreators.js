import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl';

//actionCreator
export const fetchStaffs = () => (dispatch) =>{
    dispatch(staffsLoading(true));
    
    return fetch(baseUrl + 'staffs')
        .then(response => response.json())
        .then(staff => dispatch(addStaffs(staff)));
}

export const staffsLoading = () =>({
    type: ActionTypes.STAFFS_LOADING
});

export const staffsFailed = (errmess) =>({
    type: ActionTypes.STAFFS_FAILED,
    payload: errmess
});

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
});
// cập nhật department
export const fetchDepartments = () => (dispatch) =>{
    
    return fetch(baseUrl + 'departments')
        .then(response => response.json())
        .then(departments => dispatch(addDepartments(departments)));
}

export const departmentsFailed = (errmess) =>({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errmess
});

export const addDepartments = (departments) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
});

// Cập nhật bảng lương
export const fetchSalary = () => (dispatch) =>{
    
    return fetch(baseUrl + 'staffsSalary')
        .then(response => response.json())
        .then(salary => dispatch(addSalary(salary)));
}

export const salaryFailed = (errmess) =>({
    type: ActionTypes.SALARY_FAILED,
    payload: errmess
});

export const addSalary = (salary) => ({
    type: ActionTypes.ADD_SALARY,
    payload: salary
});
