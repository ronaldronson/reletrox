import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class IndexPage extends Component {
  static propTypes = {
  };

  render() {
    return (
      <main className="u-center-block app-welcome o-container o-container--small">
      	<div className="u-center-block__content">
      		<h1 className="c-heading c-heading--medium">Welcome to Reletrox!</h1>
    			<div className="c-form-element">
            <button className="c-button c-button--primary c-button--block" type="submit">
              <i className="fa fa-dropbox" aria-hidden="true"></i> Login with dropbox
            </button>
    			</div>
          <span className="c-text--quiet">
            In order to syncronize data with other devices please login using link above.
          </span>
    			<label className="c-form-element c-label">
            <div className="c-card__group-divider"></div>
            <div className="u-center-block__content u-center-block__content--horizontal">
              OR
            </div>
    			</label>
    			<div className="c-form-element">
            <Link to='/notes'>
              <button className="c-button c-button c-button--block" type="submit">
                Try offline
              </button>
            </Link>
    			</div>
      	</div>
      </main>
    );
  }
}
