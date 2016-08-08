import {deepEqual} from 'assert';
import clone from 'clone';

const isEqual = (a, b) => {
  try {
    deepEqual(a, b);
    return true;
  } catch (e) {
    return false;
  }
}

const getSlice = store => store.getState().notes.data;

export default store => next => action => {
  const notesBefore = clone(getSlice(store));
  const result = next(action)
  if (!isEqual(notesBefore, getSlice(store))) {
    console.log('notes updated!', getSlice(store))
  }
  // after && after(store.getState(), action, result);
  return result;
}
