import {
  OPEN_POPUP,
  CLOSE_POPUP
} from '../actions/popups';

export default function popups(state = {open: false}, action) {
  switch (action.type) {

    case OPEN_POPUP:
      return {open: true};

    case CLOSE_POPUP:
      return {open: false};

    default:
      return state;
  }
}
