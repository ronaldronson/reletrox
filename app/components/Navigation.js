import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

export default class Navidation extends Component {

  static propTypes = {
    activeCategory: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    openPopup: PropTypes.func.isRequired,
    editMode: PropTypes.bool.isRequired,
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

    const isActive = category => category.name === activeCategory;
    const delCat = cat => e => (e.stopPropagation(), deleteCategory(cat));

    return (
      <div className="o-grid__cell--width-15 o-panel-container app-navigation">
        <nav className="c-nav c-nav--light a-nav--fast o-panel">
          <div
            className="c-nav__content">
            <i className="fa fa-pencil-square-o"></i>  Categories
          </div>
          {categories.map(cat =>
            <div key={cat.name}
              className={classnames('c-nav__item', 'u-window-box--small',{
                'c-nav__item--primary': isActive(cat),
                'c-nav__item--active': isActive(cat)
              })}
              onClick={() => setActiveCategory(cat.name)}>
              {!!editMode &&
                <span
                  className="c-badge c-badge--error"
                  onClick={delCat(cat.name)}>
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
            <i className="fa fa-cog"></i>  {editMode ? 'Done' : 'Customize'}
          </div>
        </nav>
      </div>
    );
  }
}
