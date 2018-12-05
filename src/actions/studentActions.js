import StudentAPI from '../api/mockStudentApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadStudentsSuccess(students){
    return {type:types.LOAD_STUDENTS_SUCCESS,students};
}

export function loadStudents(){
    return function(dispatch){
        return StudentAPI.getAllStudents().then(students=>{
            dispatch(loadStudentsSuccess(students));
        }).catch(error=>{
            throw(error);
        });
    };
}