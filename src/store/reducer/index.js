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
      let newSort;
      let sortedHotels;

      if (action.sort) {
        newSort = action.sort === "asc" ? "ascending" : "descending";
      }

      if (newSort) {
        sortedHotels =
          newSort === "ascending"
            ? state.hotelList.sort((a, b) => a.StarRating - b.StarRating)
            : state.hotelList.sort((a, b) => b.StarRating - a.StarRating);
      }
      return {
        ...state,
        sort: newSort,
        hotelList: sortedHotels
      };

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
      return {
        ...state,
        hotelList: newHotels,
        filters: newFilters
      };

    case actionTypes.CLEAR_FILTERS:
      let resetFilters = Object.assign(state.filters, {});
      for (let key in resetFilters) {
        if (resetFilters[key]) resetFilters[key] = false;
      }
      return {
        ...state,
        hotelList,
        filters: resetFilters
      };

    default:
      return state;
  }
};

export default reducer;
