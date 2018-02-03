import axios from 'axios';
import config from '../config.json';

const matadorAPI = axios.create({
  baseURL: config.ropsten.API,
});

export function getCompanyInfo(company) {
  // matadorAPI.get();
}

export function postCompanyInfo(company) {
  // matadorAPI.get();
}
