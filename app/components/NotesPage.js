import React, { Component, PropTypes } from 'react'
import Modal from './Modal';
import Navigation from './Navigation'
import List from './List'
import Item from './Item'

export default class HomePage extends Component {

  static propTypes = {
    setActiveCategory: PropTypes.func.isRequired,
    notes: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
  };

  render() {
    const {
      addCategory,
      addNote,
      changeNote,
      deleteNote,
      setActiveCategory,
      setActiveNote,
      setSortByDate,
      filterByInput,
      openPopup,
      closePopup,
      notes: {activeCategory, activeNote, sortByDate, filter},
      notesList,
      categories,
      popups
    } = this.props;

    return (
      <main className="o-grid o-grid--no-gutter o-panel">
        <Navigation
          activeCategory={activeCategory}
          categories={categories}
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
