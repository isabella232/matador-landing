import * as TS from '../../constants/redux/tokenStudio';

const INITIAL_STATE = {
  companyOpen: false,
  companyComplete: false,
  st20Open: false,
  st20Complete: false,
  stoOpen: false,
  stoComplete: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TS.TOGGLE_COMPANY_FORM:
      return { ...state, companyOpen: action.payload };
    case TS.TOGGLE_ST20_FORM:
      return { ...state, st20Open: action.payload };
    case TS.TOGGLE_STO_FORM:
      return { ...state, stoOpen: action.payload };
    case TS.CREATE_COMPANY:
      return { ...state, companyComplete: true, companyOpen: false };
    case TS.CREATE_COMPANY_FAILED:
      return { ...state, companyComplete: false, companyOpen: true };
    case TS.CREATE_ST20:
      return { ...state, st20Complete: true, st20Open: false };
    case TS.CREATE_ST20_FAILED:
      return { ...state, st20Complete: false, st20Open: true };
    case TS.CREATE_STO:
      return { ...state, stoComplete: true, stoOpen: false };
    case TS.CREATE_STO_FAILED:
      return { ...state, stoComplete: false, stoOpen: true };
    default:
      return state;
  }
};
