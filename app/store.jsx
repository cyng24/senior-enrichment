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
export function changeCampus (campus){
    return { type: 'CHANGE_CAMPUS', campus}
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
        })
        .catch( (err) => {console.trace(err)});
    }
}
export function unpostStudent(id) {
    return (dispatch) => {
        return axios.delete(`/api/students/${id}`, id)
        .then( (res) => res.data)
        .then(student => {
            return dispatch(removeStudent(student))
        })
        .catch( (err) => {console.trace(err)});
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
    return (dispatch) => {
        return axios.delete(`/api/campuses/${campus}`, campus)
        .then( res => res.data)
        .then(campus => {
            return dispatch(removeCampus(campus))
        })
        .catch( (err) => {console.log(err)});
    }
}
export function updateCampus(campus) {
    console.log("update campus", campus);
    return (dispatch) => {
        return axios.put(`/api/campuses/${campus.id}`, campus)
        .then(campus => {
            return dispatch(changeCampus(campus))
        })
        .then(res => res.data)
        .catch( (err) => {console.log(err)});
    }
}
export function updateStudent(student) {
    console.log("update student", student);
    return (dispatch) => {
        return axios.put(`/api/students/${student.id}`, student)
        .then(student => {
            return dispatch(getStudent(student))
        })
        .then(res => res.data)
        .catch( (err) => {console.log(err)});
    }
}

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))
