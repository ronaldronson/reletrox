import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

export default class Navidation extends Component {

  static propTypes = {
    activeCategory: PropTypes.string,
    categories: PropTypes.array.isRequired,
    openPopup: PropTypes.func.isRequired,
    editMode: PropTypes.bool,
    deleteCategory: PropTypes.func.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
    setEditMode: PropTypes.func.isRequired,
  };

  render() {
    const {
      activeCategory,
      categories,
      deleteCategory,
      editMode,
      openPopup,
      setActiveCategory,
      setEditMode
    } = this.props;

    const isActive = category => category.id === activeCategory;
    const delCat = cat => e => (e.stopPropagation(), deleteCategory(cat));

    return (
      <div className="o-grid__cell--width-15 o-panel-container app-navigation">
        <nav className="c-nav c-nav--light a-nav--fast o-panel">
          <div
            className="c-nav__content">
            <i className="fa fa-pencil-square-o"></i>  Notes
          </div>
          {categories.map(cat =>
            <div key={cat.id}
              className={classnames('c-nav__item', 'u-window-box--small',{
                'c-nav__item--primary': isActive(cat),
                'c-nav__item--active': isActive(cat)
              })}
              onClick={() => setActiveCategory(cat.id)}>
              {!!editMode &&
                <span
                  className="c-badge c-badge--error c-badge--rounded"
                  onClick={delCat(cat.id)}>
                  <i className="fa fa-close"></i>
                </span>
              }
              {' '}{cat.name}{' '}
              {!!cat.count && (
                <span className={classnames(
                  'c-badge',
                  {'c-badge--primary': isActive(cat)}
                )}>
                  {cat.count}
                </span>
              )}
            </div>
          )}
          {!!editMode &&
            <div
              className="c-nav__item c-nav__item--success u-window-box--small"
              onClick={openPopup}>
              <i className="fa fa-plus"></i> Add new
            </div>
          }
          <div
            className="c-nav__item c-nav__item--secondary c-nav--bottom u-window-box--small"
            onClick={() => setEditMode(!editMode)}>
            <i className="fa fa-cog"></i>  {editMode ? 'Done' : 'Edit'}
          </div>
        </nav>
      </div>
    );
  }
}
