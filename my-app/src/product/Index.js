import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProducs, removeProduct } from './ProductsAction';

import Products from './components/Products';

class ProductsClass extends Component {
  constructor(props) {
    super(props);
    this.handlerRemove = (id) => {
      console.log(id);
      this.props.removeProduct(id);
    };
  }

  componentDidMount() {
    this.props.getProducs();
  }
  // TODO: connect redux dev tool
  render() {
    // console.log(this.props);
    return (
      <div id='personContainer'>
        <h1>List Products</h1>
        <Products products={this.props.products} pushIdRemove={this.props.removeProduct} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ getProducs, removeProduct }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductsClass);
