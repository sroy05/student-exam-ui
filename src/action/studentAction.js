import * as ActionTypes from './action';
import {addStudents,getAllStudent} from '../services/studenTService';

export const studentActions={

    loadAllStudent:()=>({
        type:ActionTypes.GET_ALLSTUDENTS,
        payload:{
            promise:getAllStudent()
        }
    }),

    saveStudents:(params)=>({
        type:ActionTypes.ADD_STUDENTS,
        payload:{
            promise:addStudents(params)
        }
    })
}