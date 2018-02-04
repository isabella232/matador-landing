import * as EducationActions from '../../actions/education';


const INITIAL_STATE = {
  checklist1: false,
  checklist2: false,
  checklist3: false,
  checklist4: false,

};


export const education = (state, action) => {
  // If the mapped todo of the previous state matches with the new ID of the action,
  // Only then proceed to the Reducer Switch case

  if (state._id != (action._id || action.todo._id)) {
    return state;
  }

  switch (action.type) {
    // Read
    case EducationActions.GET_CHECKLIST_SUCCESS: {
      return action.education.data.data.docs;
    }

    // Edit/modifies the individual Todos using ES6 spread operator. The cases are self explanatory.
    case EducationActions.CHECKOFF_EDUCATION:
    {
      return {
        ...state,
      };
    }

    case EducationActions.CHECKOFF_EDUCATION_SUCCESS:
    {
      return {
        ...state,
        ...action.education,
      };
    }

    default:
    {
      return state;
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case true:
      return { ...state };
    default:
      return state;
  }
};

