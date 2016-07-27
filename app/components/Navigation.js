import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

export default class Navidation extends Component {

  static propTypes = {
    activeCategory: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
  };

  render() {
    const {activeCategory, categories, setActiveCategory} = this.props;
    const isActive = category => category.name === activeCategory;

    return (
      <div className="o-grid__cell--width-15 o-panel-container">
        <nav className="c-nav c-nav--light o-panel">
          <div className="c-nav__item c-nav__item--success c-nav__item--active">
            <i className="fa fa-plus"></i> Add new
          </div>
          {categories.map(cat =>
            <div key={cat.name}
              className={classnames('c-nav__item', {
                'c-nav__item--primary': isActive(cat),
                'c-nav__item--active': isActive(cat)
              })}
              onClick={() => setActiveCategory(cat.name)}>
              {cat.name}
              {' '}
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
        </nav>
      </div>
    );
  }
}
