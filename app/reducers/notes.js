import {
  ACTIVE_CATEGORY,
  ACTIVE_NOTE,
  CHANGE_NOTE,
  SORT_BY_DATE,
  FILTER_BY_INPUT,
  SYNC_NOTES
} from '../actions/notes';

export default function counter(state = {}, action) {
  switch (action.type) {
    case ACTIVE_CATEGORY:
      return {...state, activeCategory: action.value};

    case ACTIVE_NOTE:
      return {...state, activeNote: action.value};

    case SORT_BY_DATE:
      return {...state, sortByDate: !state.sortByDate};

    case FILTER_BY_INPUT:
      return {...state, filter: action.value};

    case CHANGE_NOTE:
      const newState = {...state, activeNote: action.value};

      Object.assign(newState.data
        .filter(obj => obj.category === state.activeCategory)
        .shift().notes
        .filter(obj => obj.id === action.value.id).shift(),
        action.value,
        {date: Date.now()}
      );

      return newState;

    default:
      return state;
  }
}
