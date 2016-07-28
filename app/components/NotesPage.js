import React, { Component, PropTypes } from 'react'
import Navigation from './Navigation'
import List from './List'
import Page from './Page'

export default class HomePage extends Component {

  static propTypes = {
    setActiveCategory: PropTypes.func.isRequired,
    notes: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
  };

  render() {
    const {
      addNote,
      changeNote,
      setActiveCategory,
      setActiveNote,
      setSortByDate,
      filterByInput,
      notes: {activeCategory, activeNote, sortByDate, filter},
      notesList,
      categories
    } = this.props;

    return (
      <main className="o-grid o-grid--no-gutter o-panel">
        <Navigation
          activeCategory={activeCategory}
          categories={categories}
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
        <Page
          activeNote={activeNote}
          changeNote={changeNote}/>
      </main>
    );
  }
}
