import {
  SET_SEARCH_VALUE_BY_FULL_NAME,
  SET_SORT_VALUE_BY_GENDER,
  SET_SORT_VALUE_BY_NATIONALITY,
  CLEAR_FILTERS_VALUE,
} from "../reducers/filters";

export const setSearchValueByFullName = (payload) => ({
  type: SET_SEARCH_VALUE_BY_FULL_NAME,
  payload,
});

export const setSortValueByGender = (payload) => ({
  type: SET_SORT_VALUE_BY_GENDER,
  payload,
});

export const setSortValueByNationality = (payload) => ({
  type: SET_SORT_VALUE_BY_NATIONALITY,
  payload,
});

export const clearFiltersValue = (payload) => ({
  type: CLEAR_FILTERS_VALUE,
  payload,
});
