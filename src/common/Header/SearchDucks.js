import { createReducer } from '@reduxjs/toolkit';

/**
 * Constants
 */

export const searchModule = 'search';
const SEARCH = `${searchModule}/SEARCH`;

/**
 * Reducer
 */

const initialState = {
  loading: true,
  searchText: '',
};

export default createReducer(initialState, {
  [SEARCH]: (state, action) => {
    state.searchText = action.payload;
  },
});

/**
 * Actions
 */
export const setSearchText = (searchText) => ({ type: SEARCH, payload: searchText });
