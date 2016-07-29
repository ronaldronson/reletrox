export const ACTIVE_CATEGORY = 'ACTIVE_CATEGORY';
export const ACTIVE_NOTE = 'ACTIVE_NOTE';
export const ADD_NOTE = 'ADD_NOTE';
export const CHANGE_NOTE = 'CHANGE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const FILTER_BY_INPUT = 'FILTER_BY_INPUT';
export const SORT_BY_DATE = 'SORT_BY_DATE';
export const SYNC_NOTES = 'SYNC_NOTES';


export function sync() {
  return {
    type: SYNC_NOTES
  };
}

export function setActiveCategory(category) {
  return {
    type: ACTIVE_CATEGORY,
    value: category
  };
}

export function setActiveNote(note) {
  return {
    type: ACTIVE_NOTE,
    value: note
  };
}

export function changeNote(note) {
  return {
    type: CHANGE_NOTE,
    value: note
  };
}

export function setSortByDate() {
  return {
    type: SORT_BY_DATE
  };
}

export function filterByInput(value) {
  return {
    type: FILTER_BY_INPUT,
    value: value
  };
}


export function addNote() {
  return {
    type: ADD_NOTE
  }
}

export function deleteNote() {
  return {
    type: DELETE_NOTE
  }
}
