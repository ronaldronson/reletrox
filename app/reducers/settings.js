import {
  GET_ALL,
  SET_VALUE
} from '../actions/settings';

export default function popups(state = {}, action) {
  switch (action.type) {

    case GET_ALL:
      return {...action.value};

    case SET_VALUE:
      return {...action.value, ...state};

    default:
      return state;
  }
}
