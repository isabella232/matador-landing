import * as ED from '../../constants/redux/education';

const INITIAL_STATE = {
  checklist1: false,
  checklist2: false,
  checklist3: false,
  checklist4: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ED.CHECKOFF_EDUCATION_SUCCESS:
      return action.payload; // passing the whole
    case ED.CHECKOFF_EDUCATION_ERROR:
      return { ...state };
    default:
      return state;
  }
};

// if (state.checklist1 === false && state.checklist2 === false && state.checklist3 === false && state.checklist4 === false) {
//   if (action.payload.hasOwnProperty('checklist1')) {
//     return { ...state, checklist1: true };
//   }
// }
// if (state.checklist1 === true && state.checklist2 === false && state.checklist3 === false && state.checklist4 === false) {
//   if (action.payload.hasOwnProperty('checklist2')) {
//     return { ...state, checklist2: true };
//   }
// }
// if (state.checklist1 === true && state.checklist2 === true && state.checklist3 === false && state.checklist4 === false) {
//   if (action.payload.hasOwnProperty('checklist3')) {
//     return { ...state, checklist3: true };
//   }
// }
// if (state.checklist1 === true && state.checklist2 === true && state.checklist3 === true && state.checklist4 === false) {
//   if (action.payload.hasOwnProperty('checklist4')) {
//     return { ...state, checklist4: true };
//   }
// }
// return { ...state };
