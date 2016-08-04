import uuid from 'uuid';

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

const getNotes = state => state.data
  .filter(obj => obj.id === state.activeCategory)
  .shift();

const getNewCategory = (val) => ({
  id: uuid.v4(),
  category: val,
  notes: []
});

const getNewNote = () => ({
  id: uuid.v4(),
  title: 'Untitled',
  date: Date.now(),
  body: ''
});

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

      getNotes(newState).notes.push(newNote);

      return newState;
    }

    case ADD_CATEGORY: {
      const newCategory = getNewCategory(action.value);
      const newState = {...state, activeCategory: action.value};

      newState.data.push(newCategory);

      return newState;
    }

    case CHANGE_NOTE: {
      const newState = {...state, activeNote: action.value};

      Object.assign(getNotes(newState).notes
        .filter(obj => obj.id === action.value.id).shift(),
        action.value,
        {date: Date.now()}
      );

      return newState;
    }

    case DELETE_NOTE: {
      const newState = {...state, activeNote: {}};
      const notesObj = getNotes(newState);
      notesObj.notes = notesObj.notes
        .filter(note => note.id !== state.activeNote.id);

      return newState;
    }

    case DELETE_CATEGORY: {
      const newData = state.data.filter(obj => obj.id !== action.value);
      const activeCategory = newData[0] && newData[0].id;

      return {...state, ...{data: newData}, ...{activeCategory: activeCategory}};
    }

    case EDIT_MODE:
      return {...state, editMode: !!action.value}

    default:
      return state;
  }
}
