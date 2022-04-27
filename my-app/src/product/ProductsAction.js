import { getall, post, put, remove } from '../api/products';

export const getProducs = () => {
  return async (dispatch) => {
    const { data } = await getall();
    dispatch({
      type: 'GET_ALL_PRODUCT',
      data,
    });
  };
};
export const removeProduct = (id) => {
  return async (dispatch) => {
    const { data } = await remove(id);
    dispatch({
      type: 'REMOVE_PRODUCT',
      id,
    });
  };
};

export const addProducts = (dataPost) => {
  return async (dispatch) => {
    return post(dataPost).then(({ data }) => {
      dispatch({
        type: 'ADD_PRODUCTS',
        data,
      });
      return data;
    });
  };
};

export const editProduct = (dataPut) => {
  return async (dispatch) => {
    return put(dataPut).then(({ data }) => {
      dispatch({
        type: 'EDIT_PRODUCT',
        data,
      });
    });
  };
};
