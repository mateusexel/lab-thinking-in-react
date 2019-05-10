import React, { Component } from 'react';
import SearchBar from '../search-bar/SearchBar'
import ProductTable from '../product-table/ProductTable'
import products from '../../data.json'

class FilterableProductTable  extends Component {
  constructor(){
    super();
    this.state={
      products: products.data
    }
    this.searchProduct = this.searchProduct.bind(this) 
  }

  searchProduct(input){
    console.log('chamou')
    const productsCopy = products.data
    const newArr = productsCopy.filter((obj) =>{
      return obj.name.toLowerCase().includes(input.toLowerCase());
    })
    this.setState({
      products: newArr
    })
  }

  

  render() {
    console.log(this.state.products)
    return (
      <div>
        <div className="App">
            <h1 className="App-title">IronStore</h1>
        </div>
        <div>
          <SearchBar searchProduct={this.searchProduct} />
        </div>
        <div>
          <ProductTable products={this.state.products}/> 
        </div>
      </div>
    );
  }
}

export default FilterableProductTable ;