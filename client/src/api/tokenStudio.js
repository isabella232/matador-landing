import axios from 'axios';
import * as TS from '../constants/redux/tokenStudio';

export const toggleForm = value => (dispatch) => {
  dispatch({ type: TS.TOGGLE_FORM, payload: value });
};

export const createCompany = values => function (dispatch) {
  // axios.post(values)
  //   .then((res) => {
  //     dispatch({ type: TS.CREATE_COMPANY, payload: res });
  //   })
  //   .catch((err) => {
  //     dispatch({ type: TS.CREATE_COMPANY_FAILED, payload: err });
  //   });
  dispatch({ type: TS.CREATE_COMPANY });
};

export const createST20 = values => function (dispatch) {
  // axios.post(values)
  //   .then((res) => {
  //     dispatch({ type: TS.CREATE_ST20_FAILED });
  //   })
  //   .catch((err) => {
  //     dispatch({ type: TS.CREATE_ST20_FAILED, payload: err });
  //   });
  dispatch({ type: TS.CREATE_ST20 });
};

export const createSTO = values => function (dispatch) {
  // axios.post(values)
  //   .then((res) => {
  //     dispatch({ type: TS.CREATE_STO, payload: res });
  //   })
  //   .catch((err) => {
  //     dispatch({ type: TS.CREATE_STO_FAILED, payload: err });
  //   });
  dispatch({ type: TS.CREATE_STO });
};
