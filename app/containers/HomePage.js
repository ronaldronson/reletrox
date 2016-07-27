import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/notes';
import NotesPage from '../components/NotesPage';

function mapStateToProps(state) {
  const filter = state.notes.filter;
  const sortDir = state.notes.sortByDate ? -1 : 1;
  let notesList = state.notes.data
    .filter(obj => obj.category === state.notes.activeCategory)
    .shift().notes
    .sort((a, b) => (a.date < b.date ? 1 : -1) * sortDir);

  if (filter) {
    const regexps = filter.split(' ')
      .map(val => new RegExp(val.trim(), 'gi'));

    const cnt = str => regexps
      .map(regex => (str.match(regex) || []).length)
      .reduce((a, b) => a + b, 0);

    notesList = notesList
      .map(note => ({...note, count: cnt(note.title) + cnt(note.body)}))
      .filter(note => note.count)
      .sort((a, b) => a.count > b.count ? 1 : -1)
  }

  return {
    notes: state.notes,
    categories: state.notes.data.map(obj => ({
      count: obj.notes.length,
      name: obj.category
    })),
    notesList: notesList,
    activeNote: notesList
      .filter(obj => obj.id === state.notes.activeNote)
      .shift()
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);
