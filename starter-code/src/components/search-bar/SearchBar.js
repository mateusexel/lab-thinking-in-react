import React, { Component } from 'react';

class SearchBar extends Component {
 constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }
 
  inputChange(event) {
    this.setState({
      search: event.target.value
    }, () => {
      this.props.searchProduct(this.state.search);
    })
  }
 
  render() {
    return(
    <form  className="field">
      <label className="label">Search:</label>
      <input type="search" className="input" name="search" value={this.state.search} onChange={(e) => this.inputChange(e)} />
      <label >on Stock</label>
      <input type="checkbox"/>
    </form>
    )
  }
 }
 
 export default SearchBar;