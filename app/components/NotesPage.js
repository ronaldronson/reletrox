import React, { Component, PropTypes } from 'react'
import Modal from './Modal';
import Navigation from './Navigation'
import List from './List'
import Item from './Item'

export default class HomePage extends Component {

  static propTypes = {
    addCategory: PropTypes.func.isRequired,
    addNote: PropTypes.func.isRequired,
    changeNote: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
    setActiveNote: PropTypes.func.isRequired,
    setSortByDate: PropTypes.func.isRequired,
    setEditMode: PropTypes.func.isRequired,
    filterByInput: PropTypes.func.isRequired,
    openPopup: PropTypes.func.isRequired,
    closePopup: PropTypes.func.isRequired,
    notesList: PropTypes.array.isRequired,
    popups: PropTypes.object.isRequired,
    notes: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
  };

  render() {
    const {
      addCategory,
      addNote,
      changeNote,
      deleteCategory,
      deleteNote,

      setActiveCategory,
      setActiveNote,
      setSortByDate,
      setEditMode,

      filterByInput,
      openPopup,
      closePopup,
      notes: {activeCategory, activeNote, editMode, sortByDate, filter},
      notesList,
      categories,
      popups
    } = this.props;

    return (
      <main className="o-grid o-grid--no-gutter o-panel">
        <Navigation
          activeCategory={activeCategory}
          categories={categories}
          deleteCategory={deleteCategory}
          editMode={editMode}
          setEditMode={setEditMode}
          openPopup={openPopup}
          setActiveCategory={setActiveCategory}/>
        <List
          activeNote={activeNote}
          addNote={addNote}
          notesList={notesList}
          setActiveNote={setActiveNote}
          setSortByDate={setSortByDate}
          sortByDate={sortByDate}
          filter={filter}
          filterByInput={filterByInput}/>
        <Item
          activeNote={activeNote}
          changeNote={changeNote}
          deleteNote={deleteNote}/>
        <Modal
          action={addCategory}
          isOpen={popups.open}
          close={closePopup} />
      </main>
    );
  }
}
