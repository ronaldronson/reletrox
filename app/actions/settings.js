import storage from '../utils/storage/localStorage';

export const SET_VALUE = 'SET_VALUE';
export const GET_ALL = 'GET_VALUE';

const key = '__data';

export function setSettingValue(value) {
  return dispatch =>
    storage(key).setValue(value, (res) =>
     dispatch({
       type: SET_VALUE,
       value: value
     })
    );
}

export function getAllSettings() {
  return dispatch =>
    storage(key).getAll((res) =>
     dispatch({
       type: GET_ALL,
       value: res
     })
 );
}
