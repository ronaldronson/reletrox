import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as notesActions from '../actions/notes';
import * as popupsActions from '../actions/popups';
import NotesPage from '../components/NotesPage';
import filterNotesByVal from '../utils/filter';

const mapObj = (obj, fn = o => o) => Object.keys(obj).map(key => fn(obj[key]));

function mapStateToProps(state) {
  const {
    activeCategory, activeNote, data, filter: filterVal, sortByDate
  } = state.notes;

  const notesList = !data[activeCategory] ? [] : mapObj(data[activeCategory].notes)
    .filter(note => !note.deleted)
    .sort((a, b) => (a.date < b.date ? 1 : -1) * (sortByDate ? -1 : 1));

  const categoriesList = mapObj(data)
    .filter(o => !o.deleted)
    .map(obj => ({
      id: obj.id,
      count: mapObj(obj.notes).length,
      name: obj.category
    }));

  return {
    notes: state.notes,
    popups: state.popups,
    categories: categoriesList,
    notesList: filterVal ? filterNotesByVal(notesList, filterVal) : notesList,
    activeNote: activeNote
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...notesActions, ...popupsActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);
