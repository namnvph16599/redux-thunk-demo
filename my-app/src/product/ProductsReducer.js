import _ from "lodash";
const productReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCT":
      return action.data;
    case "ADD_PRODUCTS":
      return state.concat(action.data);
    case "EDIT_PRODUCT":
      console.log(action.data);
      return _.map(state, function (currdata) {
        return currdata.id == action.data.id ? action.data : currdata;
      });
    case "REMOVE_PRODUCT":
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
