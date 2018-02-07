import axios from 'axios';
import * as TS from '../constants/redux/tokenStudio';
import { API_URL } from '../constants/api';

export const toggleForm = value => (dispatch) => {
  dispatch({ type: TS.TOGGLE_FORM, payload: value });
};

export const createContact = () => function (dispatch) {
  dispatch({ type: TS.CREATE_CONTACT });
};

export const createCompany = values => function (dispatch) {
  console.log(values);
  axios.post(`${API_URL}/api/companies`, values)
    .then((res) => {
      dispatch({ type: TS.CREATE_COMPANY, payload: res });
    })
    .catch((err) => {
      dispatch({ type: TS.CREATE_COMPANY_FAILED, payload: err });
    });
};

export const createST20 = () => function (dispatch) {
  dispatch({ type: TS.CREATE_ST20 });
};

export const createSTO = (values, id) => function (dispatch) {
  axios.put(`${API_URL}/api/tokens/${id}`, values)
    .then((res) => {
      dispatch({ type: TS.CREATE_STO, payload: res });
    })
    .catch((err) => {
      dispatch({ type: TS.CREATE_STO_FAILED, payload: err });
    });
};
