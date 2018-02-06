import * as TS from '../../constants/redux/tokenStudio';

const INITIAL_STATE = {
  openState: {
    company: false,
    st20: false,
    sto: false,
  },
  companyComplete: false,
  st20Complete: false,
  stoComplete: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TS.TOGGLE_FORM:
      return { ...state, openState: action.payload };
    case TS.CREATE_COMPANY:
      return { ...state, companyComplete: true, openState: { companyOpen: false } };
    case TS.CREATE_COMPANY_FAILED:
      return { ...state, companyComplete: false, openState: { companyOpen: true } };
    case TS.CREATE_ST20:
      return { ...state, st20Complete: true, openState: { st20Open: false } };
    case TS.CREATE_ST20_FAILED:
      return { ...state, st20Complete: false, openState: { st20Open: true } };
    case TS.CREATE_STO:
      return { ...state, stoComplete: true, openState: { stoOpen: false } };
    case TS.CREATE_STO_FAILED:
      return { ...state, stoComplete: false, openState: { stoOpen: true } };
    default:
      return state;
  }
};
