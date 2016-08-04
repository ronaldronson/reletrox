import React, { Component, PropTypes } from 'react'
import Writer, {plugins} from 'vico';
import dateTimeFormat from '../utils/datetime';

const editorConfig = [
  plugins.BoldPlugin,
  plugins.ItalicPlugin,
  plugins.UnderlinePlugin,
  plugins.StrikethroughPlugin,
  '-',
  plugins.FontSizePlugin,
  '-',
  plugins.UnorderedListPlugin,
  plugins.OrderedListPlugin,
  '-',
  plugins.JustifyLeftPlugin,
  plugins.JustifyCenterPlugin,
  plugins.JustifyRightPlugin,
];

const notEmpty = note => !!(note && note.id);

export default class Item extends Component {

  static propTypes = {
    activeNote: PropTypes.object.isRequired,
    deleteNote: PropTypes.func.isRequired,
    changeNote: PropTypes.func.isRequired,
  };

  componentWillReceiveProps(newProps) {
    if (this.props.activeNote.id === newProps.activeNote.id) return;
    this.setState({initValue: newProps.activeNote.body})
  }

  onChange(type) {
    const {activeNote, changeNote} = this.props;
    return e => changeNote({
      ...activeNote,
      [type]: (e.target ? e.target.value : e)
    });
  }

  onDelete() {
    const {activeNote, deleteNote} = this.props;
    if (!notEmpty(activeNote)) return;
    confirm(`Delete "${activeNote.title}" ?`) && deleteNote();
  }

  render() {
    const {activeNote, deleteNote} = this.props;

    const {initValue} = this.state || {};

    return (
    	<div className="o-grid__cell--width-55 o-panel-container">
    		<nav className="c-nav c-nav--inline c-nav--light">
    			<span
            aria-label="Delete current note"
            className="c-nav__item c-nav__item--error c-tooltip c-tooltip--bottom"
            onClick={::this.onDelete}>
            <i className="fa fa-trash"></i>
          </span>
    			<span aria-label="Synchronize" className="c-nav__item c-nav__item--right c-nav__item--success c-tooltip c-tooltip--left">
            <i className="fa fa-refresh"></i>
          </span>
    		</nav>
        {notEmpty(activeNote) &&
          <div className="o-panel o-panel--nav-top u-pillar-box--xlarge u-letter-box--medium">
            <h1 className="c-heading c-heading--large u-window-box--none note-header">
              <input
                className="c-field"
                onChange={this.onChange('title')}
                type="text"
                value={activeNote.title}/>
            </h1>
            <div className="c-text--quiet u-letter-box--small">
              {dateTimeFormat(activeNote.date)}
            </div>
            <Writer
              onChange={this.onChange('body')}
              toolbar={editorConfig}
              value={initValue}/>
          </div>
        }
    	</div>
    );
  }
}
