import _ from 'lodash';
const productReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_PRODUCT':
      return action.data;
    case 'ADD_PRODUCTS':
      return state.concat(action.data);
    case 'EDIT_PRODUCT':
     return _.map(state, function (data) {return data.id = action.data.id ? action.data : data })
    case 'REMOVE_PRODUCT':
      // console.log(action.id);
      // console.log(state);
      // return _.filter(state, state.id != action.id)
      return _.filter(state, function (data) {
        return data.id != action.id;
      });

    default:
      return state;
  }   
};

export default productReducer;
