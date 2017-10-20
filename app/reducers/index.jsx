import { combineReducers } from 'redux'

const initialState = {
  newStudent: {},
  student: {},
  students: [],
  newCampus: {},
  campus: {},
  campuses: []
}

const rootReducer = function(state = initialState, action) {
  switch (action.type) {

    case 'GET_STUDENT':
    return Object.assign({}, state, {student: action.student});

    case 'GET_STUDENTS':
      return Object.assign({}, state, {students: action.students});

    case 'ADD_STUDENT':
      return Object.assign({}, state, {students: state.students.concat(action.newStudent)});

    case 'REMOVE_STUDENT':
      return state.students.filter(student => student.id !== action.id);

    case 'GET_CAMPUS':
      return Object.assign({}, state, {campus: action.campus});

    case 'GET_CAMPUSES':
      return Object.assign({}, state, {campuses: action.campuses});

    case 'ADD_CAMPUS':
      return Object.assign({}, state, {campuses: state.campuses.concat(action.newCampus)});
    
    default: 
      return state;
  }
};

export default rootReducer
