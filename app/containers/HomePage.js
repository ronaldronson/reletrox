import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as notesActions from '../actions/notes';
import * as popupsActions from '../actions/popups';
import NotesPage from '../components/NotesPage';

function filterNotesByVal(notesList, filterVal) {
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

function mapStateToProps(state) {
  const filterVal = state.notes.filter;
  const sortDir = state.notes.sortByDate ? -1 : 1;
  const activeCategory = state.notes.data
    .filter(obj => obj.category === state.notes.activeCategory)
    .shift();

  const notesList = !activeCategory ? [] : activeCategory.notes
    .sort((a, b) => (a.date < b.date ? 1 : -1) * sortDir);

  return {
    notes: state.notes,
    popups: state.popups,
    categories: state.notes.data.map(obj => ({
      count: obj.notes.length,
      name: obj.category
    })),
    notesList: filterVal ? filterNotesByVal(notesList, filterVal) : notesList,
    activeNote: state.notes.activeNote
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...notesActions, ...popupsActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);
