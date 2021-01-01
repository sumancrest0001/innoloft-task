import * as actionTypes from './actionTypes';

export const addUserInfo = payload => ({
  type: actionTypes.ADD_USER_INFO,
  payload,
});

export const addMainInfo = payload => ({
  type: actionTypes.ADD_MAIN_INFO,
  payload,
});

export const addMessage = payload => ({
  type: actionTypes.ADD_MESSAGE,
  payload,
});