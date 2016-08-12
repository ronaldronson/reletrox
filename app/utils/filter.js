export default function (notesList, filterVal) {
  const regexps = filterVal.split(' ')
    .map(val => new RegExp(val.trim(), 'gi'));

  const cnt = str => regexps
    .map(regex => (str.match(regex) || []).length)
    .reduce((a, b) => a + b, 0);

  return notesList
    .map(note => ({...note, count: cnt(note.title) + cnt(note.body)}))
    .filter(note => note.count)
    .sort((a, b) => a.count > b.count ? 1 : -1);
}
