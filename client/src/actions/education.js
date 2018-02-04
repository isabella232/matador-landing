
import { getUserChecklist, postUserChecklist } from '../api/index';


// Read
export const EducationActions = '[education] GET_CHECKLIST';
export const GET_CHECKLIST_SUCCESS = '[education] GET_CHECKLIST_SUCCESS';
export const GET_CHECKLIST_ERROR = '[education] GET_CHECKLIST_ERROR';

export const CHECKOFF_EDUCATION = '[education] CHECKOFF_EDUCATION';
export const CHECKOFF_EDUCATION_SUCCESS = '[education] CHECKOFF_EDUCATION_SUCCESS';
export const CHECKOFF_EDUCATION_ERROR = '[education] CHECKOFF_EDUCATION_ERROR';


// Read
export function GetChecklist(user) {
  return (dispatch, getState) => getUserChecklist(user).then((res) => {
    dispatch(GetChecklistSuccess(res));
  });
}

export function GetChecklistSuccess(user) {
  return {
    type: GET_CHECKLIST_SUCCESS,
    user,
  };
}


// the whole entire user checklist gets updated here
export function UpdateChecklist(updatedChecklist) {
  return (dispatch, getState) => {
    // Multiple actions can be sent usign the Redux-Thunk middleware

    dispatch({
      type: CHECKOFF_EDUCATION,
      payload: updatedChecklist,
    });
    postUserChecklist(updatedChecklist).then((res) => {
      dispatch(UpdateChecklistSuccess(res.data.data));
    });
  };
}
export function UpdateChecklistSuccess(user) {
  return {
    type: CHECKOFF_EDUCATION_SUCCESS,
    user,
    _checklistID: user._checklistID,
  };
}
