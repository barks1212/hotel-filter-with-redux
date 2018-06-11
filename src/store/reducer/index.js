import hotelList from "../../data/hotel-list.json";
import * as actionTypes from "../actions";

const initialState = {
  hotelList,
  sort: "ascending",
  filters: {
    bar: false,
    gym: false,
    spa: false,
    pool: false,
    restaurant: false,
    "car park": false,
    "full board": false,
    "half board": false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SORT_HOTELS:
      return {};
    case actionTypes.FILTER_HOTELS:
      return {};
    default:
      return state;
  }
};

export default reducer;
