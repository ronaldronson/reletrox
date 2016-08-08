const get = key => JSON.parse(localStorage.getItem(key)) || {};
const set = (obj, key) => localStorage.setItem(key, JSON.stringify({...obj, ...get(key)}));

export default (key = '__data') => ({
   getAll: (fn) => fn(get(key)),
   setValue: (obj, fn) => fn(set(obj, key))
});
