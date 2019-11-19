import {Map} from 'immutable';
import * as ActionTypes from '../action/action';

const initialState={

    addStudent:null,
    addStudentStatus:'',

    getAllStudentStatus:'',
    getAllStudentData:''

}

export const studentReducer=(state=initialState,action)=>{

    switch(action.type){

        case `${ActionTypes.ADD_STUDENTS}_PENDING` :
            return {
                ...state,
                addStudent:null,
                addStudentStatus:'PENDING'
            }
            case `${ActionTypes.ADD_STUDENTS}_FULLFILL` :
            return {
                ...state,
                addStudent:action.payload.data,
                addStudentStatus:'SUCCESS'
            }
            case `${ActionTypes.ADD_STUDENTS}_REJECTED` :
            return {
                ...state,
                addStudent:null,
                addStudentStatus:'REJECTED'
            }
            case `${ActionTypes.GET_ALLSTUDENTS}_PENDING` :
                    return {
                        ...state,
                        getAllStudentData:null,
                        getAllStudentStatus:'PENDING'
                    }
                    case `${ActionTypes.GET_ALLSTUDENTS}_FULLFILL` :
                    return {
                        ...state,
                        getAllStudentData:action.payload.data,
                        getAllStudentStatus:'SUCCESS'
                    }
                    case `${ActionTypes.GET_ALLSTUDENTS}_REJECTED` :
                    return {
                        ...state,
                        getAllStudentData:null,
                        getAllStudentStatus:'REJECTED'
                    }
    }
}