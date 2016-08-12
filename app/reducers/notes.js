import { getNewCategory, getNewNote } from '../utils/factory';

import {
  ACTIVE_CATEGORY,
  ACTIVE_NOTE,
  ADD_CATEGORY,
  ADD_NOTE,
  CHANGE_NOTE,
  DELETE_NOTE,
  DELETE_CATEGORY,
  SORT_BY_DATE,
  FILTER_BY_INPUT,
  SYNC_NOTES,
  EDIT_MODE
} from '../actions/notes';

export default function notes(state = {}, action) {
  switch (action.type) {
    case ACTIVE_CATEGORY:
      return {...state, activeCategory: action.value};

    case ACTIVE_NOTE:
      return {...state, activeNote: action.value};

    case SORT_BY_DATE:
      return {...state, sortByDate: !state.sortByDate};

    case FILTER_BY_INPUT:
      return {...state, filter: action.value};

    case ADD_NOTE: {
      const newNote = getNewNote();
      const newState = {...state, activeNote: newNote};
      state.data[state.activeCategory].notes[newNote.id] = newNote;
      return newState;
    }

    case ADD_CATEGORY: {
      const newCategory = getNewCategory(action.value);
      const newState = {...state, activeCategory: newCategory.id};
      newState.data[newCategory.id] = newCategory;
      return newState;
    }

    case CHANGE_NOTE: {
      const newState = {...state, activeNote: action.value};
      const note = state.data[state.activeCategory].notes[action.value.id];
      Object.assign(note, action.value, {date: Date.now()});
      return newState;
    }

    case DELETE_NOTE: {
      const newState = {...state, activeNote: {}};
      const notesObj = state.data[state.activeCategory].notes[state.activeNote.id];
      notesObj.deleted = true;
      return newState;
    }

    case DELETE_CATEGORY: {
      const newState = {...state};
      newState.data[action.value].deleted = true;
      const firstNotDeletedCat = Object.keys(newState.data)
        .map(i => newState.data[i])
        .filter(obj => !obj.deleted)
        .shift();

      const newActiveCategory = newState.activeCategory == action.value
        ? firstNotDeletedCat &&  firstNotDeletedCat.id
        : newState.activeCategory;

      return {...state, ...{activeCategory: newActiveCategory}};
    }

    case EDIT_MODE:
      return {...state, editMode: !!action.value}

    default:
      return state;
  }
}
