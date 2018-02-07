import * as TS from '../../constants/redux/tokenStudio';

const INITIAL_STATE = {
  openState: {
    contact: false,
    company: false,
    st20: false,
    sto: false,
  },
  contactComplete: false,
  companyComplete: false,
  st20Complete: false,
  stoComplete: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TS.TOGGLE_FORM:
      return { ...state, openState: action.payload };
    case TS.CREATE_CONTACT:
      return { ...state, contactComplete: true, openState: { contact: false } };
    case TS.CREATE_COMPANY:
      return { ...state, companyComplete: true, openState: { company: false } };
    case TS.CREATE_COMPANY_FAILED:
      return { ...state, companyComplete: false, openState: { company: true } };
    case TS.CREATE_ST20:
      return { ...state, st20Complete: true, openState: { st20: false } };
    case TS.CREATE_STO:
      return { ...state, stoComplete: true, openState: { sto: false } };
    case TS.CREATE_STO_FAILED:
      return { ...state, stoComplete: false, openState: { sto: true } };
    default:
      return state;
  }
};
