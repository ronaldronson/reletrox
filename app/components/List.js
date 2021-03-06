import React, { Component, PropTypes } from 'react'
import Dotdotdot from 'react-dotdotdot'
import classnames from 'classnames';
import dateTimeFormat from '../utils/datetime';

export default class List extends Component {
  static propTypes = {
    activeNote: PropTypes.object.isRequired,
    addNote: PropTypes.func.isRequired,
    notesList: PropTypes.array,
    setActiveNote: PropTypes.func.isRequired,
    setSortByDate: PropTypes.func.isRequired,
    sortByDate: PropTypes.bool,
    filter: PropTypes.string,
    filterByInput: PropTypes.func.isRequired,
  };

  render() {
    const {
      activeNote,
      addNote,
      notesList,
      setActiveNote,
      setSortByDate,
      sortByDate,
      filter,
      filterByInput
    } = this.props;

    const isActive = note => note.id === activeNote.id;
    const sripHtml = str => str.replace(/(&nbsp;|<([^>]+)>)/ig, ' ');

    return (
    	<div className="o-grid__cell--width-30 o-panel-container">
    		<nav className="c-nav c-nav--inline c-nav--light">
    				<span className="c-nav__item" onClick={setSortByDate}>
              <span>Sort by </span>
              <span className="c-text--loud">
                Date <i className={classnames('fa', {
                  'fa-chevron-down': !sortByDate,
                  'fa-chevron-up': !!sortByDate})}></i>
            </span>
            </span>
            <span
              aria-label="Add new note"
              className="c-nav__item c-nav__item--right c-nav__item--success c-tooltip c-tooltip--bottom"
              onClick={addNote}>
              <i className="fa fa-plus"></i>
            </span>
    		</nav>
        <div className="o-panel o-panel--nav-top">
    			<div className={classnames('c-card', {'t-demo': !!notesList.length})}>
            {(!!notesList.length || !!filter) &&
              <div className="c-card__item u-window-box--small">
                <div className="c-input-group">
                  <input
                    className="c-field"
                    onChange={e => filterByInput(e.target.value)}
                    type="text"
                    placeholder="Search by ..."
                    value={filter || ''} />
                  <button className="c-button" onClick={() => filterByInput()}>
                    <i className="fa fa-times"></i>
                  </button>
                </div>
              </div>
            }
            {(!notesList.length && !filter) &&
              <div className="c-card__content u-window-box--xlarge">
                <p className="c-paragraph c-text--quiet">
                  To add new Note plese click on <i className="fa fa-plus"></i> icon above
                </p>
              </div>
            }
            {notesList.map(note =>
              <div key={note.id}
                className={classnames(
                  'c-card__item u-window-box--medium',
                  {'c-card--is-active': isActive(note)}
                )}
                onClick={() => setActiveNote(note)}>
                <div className="c-text--loud">
                  {note.title}
                </div>
                <div className="u-letter-box--xsmall">
                {dateTimeFormat(note.date)}
                </div>
                <div className="c-text--quiet">
                  <Dotdotdot clamp={3}>
                    {sripHtml(note.body)}
                  </Dotdotdot>
                </div>
              </div>
            )}
    			</div>
    		</div>
    	</div>
    );
  }
}
