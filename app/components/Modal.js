import React, { Component, PropTypes } from 'react'

export default class Modal extends Component {

  static propTypes = {
    action: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
  };

  onAction() {
    const {action, close} = this.props;

    action(this.state.value);
    this.setState({value: ''});
    close();
  }

  onKeyUp(e) {
    switch (e.which) {
      case 13: // enter
        return this.onAction();
      case 27: // esc
        return this.props.close();
    }
  }

  render() {
    const {action, close, isOpen} = this.props;

    if (!isOpen) return null;

    return (
      <div>
        <div className="c-overlay"></div>
        <div
          className="c-modal c-modal--high a-modal a-modal--top"
          style={{top: '20%', width: '400px'}}>
          <header className="c-modal__header">
            <button
              className="c-button c-button--close"
              onClick={close}
              type="button">
              <i className="fa fa-close"></i>
            </button>
            <h3 className="c-heading c-heading--small">
              Add new category
            </h3>
          </header>

          <div className="c-modal__body">
            <div className="c-form-element">
              <input
                autoFocus
                className="c-field"
                onChange={e => this.setState({value: e.target.value})}
                onKeyUp={::this.onKeyUp}
                placeholder="New category"
                value={this.state ? this.state.value : ''} />
            </div>
          </div>

          <footer className="c-modal__footer c-modal__footer--block">
            <button
              className="c-button c-button--success"
              onClick={::this.onAction}
              type="button">
              Save
            </button>
            <button
              className="c-button c-button--error"
              onClick={close}
              type="button">
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }

}
