import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export function getStudent (student) {
    return {
        type: 'GET_STUDENT',
        student
    }
}
export function getStudents (students) {
    return {
        type: 'GET_STUDENTS',
        students
    }
}
export function addStudent (studentName, studentCampus) {
    return {
        type: 'ADD_STUDENT',
        newStudent: {name: studentName, campus: studentCampus}
    }
}
export function removeStudent (id){
    return {
        type: 'REMOVE_STUDENT',
        id
    }
}

export function fetchStudents() {
    return (dispatch) => {
        return axios.get('/api/students')
        .then(res => res.data)
        .then(students => {
            dispatch(getStudents(students));
        });
    };
}
export function postStudent(student) {
    return (dispatch) => {
        return axios.post('api/students', student)
        .then(res => res.data)
        .then(newStudent => {
            dispatch(getStudent(newStudent));
        })
    }
}

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))
