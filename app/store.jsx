import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios';

export function getStudent (student) {
    return { type: 'GET_STUDENT', student }
}
export function getStudents (students) {
    return { type: 'GET_STUDENTS', students }
}
export function getCampus (campus) {
    return { type: 'GET_CAMPUS', campus }
}
export function getCampuses (campuses) {
    return { type: 'GET_CAMPUSES', campuses }
}
export function addStudent (studentName, studentCampus) {
    return { type: 'ADD_STUDENT', newStudent: {name: studentName, campus: studentCampus} }
}
export function addCampus (newCampus) {
    return { type: 'ADD_CAMPUS', newCampus }
}
export function removeStudent (id){
    return { type: 'REMOVE_STUDENT', id }
}
export function removeCampus (id){
    return { type: 'REMOVE_CAMPUS', id}
}

export function fetchStudents() {
    return (dispatch) => {
        return axios.get('/api/students')
        .then(res => res.data)
        .then(students => {
            return dispatch(getStudents(students));
        })
        .catch((err) => {console.log(err)});
    };
}
export function postStudent(student) {
    return (dispatch) => {
        return axios.post('/api/students/', student)
        .then(res => res.data)
        .then(newStudent => {
            return dispatch(addStudent(newStudent));
        });
    }
}
export function unpostStudent(student) {
    console.log("student id", student);
    return (dispath) => {
        console.log("INSIDE DISPATCH THUNK");
        return axios.delete('/api/students/', student)
        .then( res => res.data)
        .then(student => {
            console.log("INSIDE AXIOS DELETE");
            return dispatchEvent(removeStudent(student))
        })
        .catch( (err) => {console.log(err)});
    }
}
export function fetchCampuses() {
    return (dispatch) => {
        return axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => {
            return dispatch(getCampuses(campuses));
        })
        .catch((err) => {console.log(err)});
    };
}
export function fetchCampus(campus) {
    return (dispatch) => {
        return axios.get(`/api/campuses/${campus}`)
        .then(res => res.data)
        .then(campus => {
            return dispatch(getCampus(campus));
        })
        .catch((err) => {console.log(err)});
    };
}
export function postCampus(campus) {
    return (dispatch) => {
        return axios.post('/api/campuses/', campus)
        .then(res => res.data)
        .then(newCampus => {
            return dispatch(addCampus(newCampus));
        })
        .catch((err) => {console.log(err)});
    }
}
export function unpostCampus(campus) {
    return (dispath) => {
        return axios.delete('/api/campuses/', campus)
        .then( res => res.data)
        .then(campus => {
            return dispatchEvent(removeCampus(campus))
        })
        .catch( (err) => {console.log(err)});
    }
}

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))
