import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.css';

export class SearchBar extends PureComponent {
  initSearch = () => {
    const suggest = new window.ymaps.SuggestView('suggest');
    suggest.events.add(`select`, this.chekPointHandler);
  };

  chekPointHandler = event => {
    event.preventDefault();
    this.props.addPoint(event.get('item').value);
    this._inputAddress.value = ``;
  };

  render() {
    return (
      <div>
        <label className="suggest_label">Введите адрес точки:</label>
        <input
          name="address"
          type="text"
          id="suggest"
          ref={node => (this._inputAddress = node)}
        />
      </div>
    );
  }

  componentDidMount() {
    window.ymaps.ready(this.initSearch);
  }
}

const mapDispatch = dispatch => ({
  addPoint: dispatch.points.searchPoint,
});

export default connect(
  null,
  mapDispatch,
)(SearchBar);
