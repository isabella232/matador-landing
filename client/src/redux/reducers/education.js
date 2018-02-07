import * as ED from '../../constants/redux/education';

const INITIAL_STATE = {
  checklist1: false,
  checklist2: false,
  checklist3: false,
  checklist4: false,
  checklist5: false,
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
