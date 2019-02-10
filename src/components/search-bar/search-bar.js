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

  chekPoint = event => {
    if (event.key === `Enter`) {
      this.props.addPoint(event.target.value);
    }
  };

  render() {
    return (
      <div>
        <p className="header">Начните вводить адрес точки для появления поисковой подсказки:</p>
        <input type="text" id="suggest" className="suggest" onKeyPress={this.chekPoint} />
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
