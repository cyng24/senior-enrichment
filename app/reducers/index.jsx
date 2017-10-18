import { combineReducers } from 'redux'

const initialState = {
  newStudent: {},
  student: {},
  students: []
}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {

    case 'GET_STUDENT':
    return Object.assign({}, state, {student: action.student});

    case 'GET_STUDENTS':
      return Object.assign({}, state, {students: action.students});

    case 'ADD_STUDENT':
      return action.newStudent;

    case 'REMOVE_STUDENT':
      return students.filter(student => student.id !== action.id);

    default: 
      return state;
  }
};

export default rootReducer
