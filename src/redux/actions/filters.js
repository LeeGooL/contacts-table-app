import {
  SET_SEARCH_VALUE_BY_FULL_NAME,
  SET_FILTER_VALUE_BY_GENDER,
  SET_FILTER_VALUE_BY_NATIONALITY,
  SET_SORT_VALUE_BY_FULL_NAME,
  CLEAR_FILTERS_VALUE,
} from "../reducers/filters";

export const setSearchValueByFullName = (payload) => ({
  type: SET_SEARCH_VALUE_BY_FULL_NAME,
  payload,
});

export const setFilterValueByGender = (payload) => ({
  type: SET_FILTER_VALUE_BY_GENDER,
  payload,
});

export const setFilterValueByNationality = (payload) => ({
  type: SET_FILTER_VALUE_BY_NATIONALITY,
  payload,
});

export const setSortValueByFullName = (payload) => ({
  type: SET_SORT_VALUE_BY_FULL_NAME,
  payload,
});

export const clearFiltersValue = (payload) => ({
  type: CLEAR_FILTERS_VALUE,
  payload,
});
