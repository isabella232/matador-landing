// import { getUserChecklist, postUserChecklist } from '../api/index';
// import thunk from 'redux-thunk';
import axios from 'axios';
import * as ED from '../constants/redux/education';

export const toggleChecklist = value => function (dispatch) {
  dispatch({ type: ED.CHECKOFF_EDUCATION_SUCCESS, payload: value });
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
