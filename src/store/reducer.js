import * as actionTypes from './actionTypes';

const initialState = {
  user: {},
  message: '',
};

const updateState = (mainObject, updateValue) => (
  {
    ...mainObject,
    ...updateValue,
  }
);

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER_INFO:
      return {
        ...state,
        user: updateState(state.user, action.payload),
      };
    case actionTypes.ADD_MAIN_INFO:
      return {
        ...state,
        user: updateState(state.user, action.payload),
      };

    case actionTypes.ADD_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
