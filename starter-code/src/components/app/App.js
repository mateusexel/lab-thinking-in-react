import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from '../filterable-product-table/FilterableProductTable'


class App extends Component {
  render() {
    return (
      <div>
        <FilterableProductTable />
      </div>
    );
  }
}

export default App;
