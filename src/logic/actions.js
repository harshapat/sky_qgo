import { ADD_ITEM, DELETE_ITEM, COMPLETE_ITEM } from './constants';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const deleteItem = id => {
  return { type: DELETE_ITEM, id };
};

export const completeItem = id => {
  return { type: COMPLETE_ITEM, id };
};