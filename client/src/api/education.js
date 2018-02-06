// import { getUserChecklist, postUserChecklist } from '../api/index';
// import thunk from 'redux-thunk';

import axios from 'axios';
import * as ED from '../constants/redux/education';

// // Read
// export function GetChecklist(checklist) {
//   return (dispatch, getState) => getUserChecklist(checklist).then((res) => {
//     dispatch(GetChecklistSuccess(res));
//   });
// }

// export function GetChecklistSuccess(checklist) {
//   return {
//     type: GET_CHECKLIST_SUCCESS,
//     checklist,
//   };
// }


// the whole entire user checklist gets updated here
// export function UpdateChecklist(updatedChecklist) {
//   return (dispatch, getState) => {
//     // Multiple actions can be sent usign the Redux-Thunk middleware

//     dispatch({
//       type: CHECKOFF_EDUCATION,
//       payload: updatedChecklist, // the payload is the WHOLE state, and from the reducer comes which one we are updating
//     });
//     postUserChecklist(updatedChecklist).then((res) => {
//       dispatch(UpdateChecklistSuccess(res.data.data));
//     });
//   };
// }
// export function UpdateChecklistSuccess(user) {
//   return {
//     type: CHECKOFF_EDUCATION_SUCCESS,
//     user,
//     _checklistID: user._checklistID,
//   };
// }


export const toggleChecklist = value => function (dispatch) {
  dispatch({ type: ED.CHECKOFF_EDUCATION_SUCCESS, payload: value });
  // postUpdatedChecklist(value);
};

// export const toggleChecklist = value => function (dispatch) {
//   // axios.post(value)
//   //   .then((res) => {
//   //     dispatch({ type: ED.CHECKOFF_EDUCATION_SUCCESS, payload: res });
//   //   })
//   //   .catch((err) => {
//   //     dispatch({ type: ED.CHECKOFF_EDUCATION_ERROR, payload: err });
//   //   });
//   dispatch({ type: ED.CHECKOFF_EDUCATION_SUCCESS });
// };
