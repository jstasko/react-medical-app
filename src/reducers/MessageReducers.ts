import {CLEAR_MESSAGE, SET_MESSAGE} from "../actions/MessageActions";
import {AnyAction} from 'redux';

const initialState = {};

export function message(state = initialState, action: AnyAction) {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload };

    case CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}
