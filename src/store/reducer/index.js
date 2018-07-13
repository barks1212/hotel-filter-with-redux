import hotelList from "../../data/hotel-list.json";
import * as actionTypes from "../actions";

const initialState = {
  hotelList,
  sort: null,
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
      let newFilters = Object.assign(state.filters, {
        [action.fac]: !state.filters[action.fac]
      });
      let checkedChecker = [];
      for (let key in state.filters) {
        if (state.filters[key]) checkedChecker.push(key);
      }
      let newHotels = hotelList.filter(hotel => {
        return checkedChecker.every(facility =>
          hotel.Facilities.includes(facility)
        );
      });
      console.log(newHotels);
      return {
        ...state,
        hotelList: newHotels,
        filters: newFilters
      };

    default:
      return state;
  }
};

export default reducer;
