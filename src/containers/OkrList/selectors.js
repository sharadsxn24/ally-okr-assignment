import { createSelector } from "@reduxjs/toolkit";

export const getCategoryFilter = (state) => state.okr.filters.category;

export const getOkrList = (state) => state.okr.okrList.data;

export const getOkrLoading = (state) => state.okr.okrList.loading;

export const getOkrError = (state) => state.okr.okrList.error;

export const getCategories = createSelector(getOkrList, (list) => {
  const map = list.reduce((acc, item) => ({ ...acc, [item.category]: true }), {})
  return Object.keys(map);
});

export const getVisibleOkrList = createSelector(
  [getCategoryFilter, getOkrList],
  (category, list) => {
    return !!category
      ? list.filter(item => item.category.toLowerCase() === category)
      : list
  }
);

export const getNestedOkrList = createSelector(getVisibleOkrList, (visibleOkr) => {
  const objectives = visibleOkr.filter(okr => okr.parent_objective_id === '');
  const result = objectives.map((objective) => {
    return {
      ...objective,
      children: visibleOkr.filter(okr => okr.parent_objective_id === objective.id)
    };
  });
  return result;
});
