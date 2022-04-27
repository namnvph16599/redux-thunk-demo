import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { editProduct } from './ProductsAction';

import ProductsEdit from './components/ProductEdit';

class ProductsClass extends Component {
  handlerEdit = (data) => {
    this.props.editProduct(data)
  }
  // TODO: connect redux dev tool
  render() {
    console.log(this.props);
    return (
      <div id='personContainer'>
        <h1>Edit Products</h1>
        <ProductsEdit pushDataEdit={this.props.editProduct}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ editProduct }, dispatch);

export default (connect(null, mapDispatchToProps)(ProductsClass));
