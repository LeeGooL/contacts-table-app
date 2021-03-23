export const SET_SEARCH_VALUE_BY_FULL_NAME = "SET_SEARCH_VALUE_BY_FULL_NAME";
export const SET_SORT_VALUE_BY_GENDER = "SET_SORT_VALUE_BY_GENDER";
export const SET_SORT_VALUE_BY_NATIONALITY = "SET_SORT_VALUE_BY_NATIONALITY";
export const CLEAR_FILTERS_VALUE = "CLEAR_FILTERS_VALUE";

const initialState = {
  searchValueByFullName: "",
  sortValueByGender: "",
  sortValueByNationality: "",
};

const filters = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH_VALUE_BY_FULL_NAME:
      return {
        ...state,
        searchValueByFullName: payload,
      };

    case SET_SORT_VALUE_BY_GENDER:
      return {
        ...state,
        sortValueByGender: payload,
      };

    case SET_SORT_VALUE_BY_NATIONALITY:
      return {
        ...state,
        sortValueByNationality: payload,
      };

    case CLEAR_FILTERS_VALUE:
      return {
        searchValueByFullName: "",
        sortValueByGender: "",
        sortValueByNationality: "",
      };

    default:
      return state;
  }
};

export default filters;
