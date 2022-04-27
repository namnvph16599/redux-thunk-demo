import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
  const {products} = props;
  return(
  <div id='Products'>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>desc</th>
        </tr>
      </thead>
      <tbody>
        {products?.map(item => (<tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.image}</td>
          <td>{item.desc}</td>
          <td><Link to={`/products/${item.id}/edit`}>Edit</Link></td>
          <td><button onClick={() => {
            props.pushIdRemove(item.id)
            /* TODO: call action => delete prod => dispatch action remove item from redux */
            // return products.filter(val => val.id != item.id)
          }}>remove</button></td>
        </tr>))}
      </tbody>
    </table>
  </div>
);
}

export default Products;
