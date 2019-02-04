import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
  state = {
    map: null,
  };

  initSearch = () => {
    const { ymaps } = this.props;
    new ymaps.SuggestView('suggest1');
  };

  render() {
    return (
      <div style={{ float: 'left', width: '30%' }}>
        <p class="header">Начните вводить запрос для появления поисковой подсказки</p>
        <input type="text" id="suggest1" />
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
export default connect(mapStateProps)(SearchBar);
