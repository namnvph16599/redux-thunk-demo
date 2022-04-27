import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addProducts } from './ProductsAction';

import ProductsAdd from './components/ProductAdd';

class ProductsClass extends Component {
  addData = (data) => {
    this.props.addProducts(data).then(() => {
      console.log(1);
    });
  }
  // TODO: connect redux dev tool
  render() {
    console.log(this.props);
    return (
      <div id='personContainer'>
        <h1>Add Products</h1>
        <ProductsAdd pushDataAdd={this.props.addProducts} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ addProducts }, dispatch);

export default (connect(null, mapDispatchToProps)(ProductsClass));
