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
    new ymaps.SuggestView('suggest');
  };

  chekPointHandler = event => {
    event.preventDefault();
    const bar = event.target.elements.address;
    this.props.addPoint(bar.value);
    bar.value = ``;
  };

  render() {
    return (
      <form onSubmit={this.chekPointHandler}>
        <p className="header">Начните вводить адрес точки для появления поисковой подсказки:</p>
        <input name="address" type="text" id="suggest" className="suggest" />
      </form>
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
