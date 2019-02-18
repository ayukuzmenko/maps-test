import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { addPoint } from '../../actions';

class SearchBar extends Component {
  state = {
    map: null,
  };

  initSearch = () => {
    const { ymaps } = this.props;
    const suggest = new ymaps.SuggestView('suggest');
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
        <p className="header">Начните вводить адрес точки для появления поисковой подсказки:</p>
        <input
          name="address"
          type="text"
          id="suggest"
          className="suggest"
          ref={node => (this._inputAddress = node)}
        />
      </div>
    );
  }

  componentDidMount() {
    const { ymaps } = this.props;
    ymaps.ready(this.initSearch);
  }
}

const mapStateProps = state => {
  return {
    ymaps: state.ymaps,
  };
};

export default connect(
  mapStateProps,
  {
    addPoint,
  },
)(SearchBar);
