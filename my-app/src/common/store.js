
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from "../product/ProductsReducer"

const reducers = combineReducers({
  products: productsReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;
