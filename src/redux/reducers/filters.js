export const SET_SEARCH_VALUE_BY_FULL_NAME = "SET_SEARCH_VALUE_BY_FULL_NAME";
export const SET_FILTER_VALUE_BY_GENDER = "SET_FILTER_VALUE_BY_GENDER";
export const SET_FILTER_VALUE_BY_NATIONALITY =
  "SET_FILTER_VALUE_BY_NATIONALITY";
export const SET_SORT_VALUE_BY_FULL_NAME = "SET_SORT_VALUE_BY_FULL_NAME";
export const CLEAR_FILTERS_VALUE = "CLEAR_FILTERS_VALUE";

const initialState = {
  searchValueByFullName: "",
  filterValueByGender: "",
  filterValueByNationality: "",
  sortValueByFullName: "",
};

const filters = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH_VALUE_BY_FULL_NAME:
      return {
        ...state,
        searchValueByFullName: payload,
      };

    case SET_FILTER_VALUE_BY_GENDER:
      return {
        ...state,
        filterValueByGender: payload,
      };

    case SET_FILTER_VALUE_BY_NATIONALITY:
      return {
        ...state,
        filterValueByNationality: payload,
      };

    case CLEAR_FILTERS_VALUE:
      return {
        ...state,
        searchValueByFullName: "",
        filterValueByGender: "",
        filterValueByNationality: "",
      };

    case SET_SORT_VALUE_BY_FULL_NAME:
      return {
        ...state,
        sortValueByFullName: payload,
      };

    default:
      return state;
  }
};

export default filters;
