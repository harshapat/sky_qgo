import { ADD_ITEM, DELETE_ITEM, COMPLETE_ITEM } from './constants';

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', completed: false, },
    { id: 2, content: 'Buy cat food', completed: false, },
    { id: 3, content: 'Water the plants', completed: false, },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
        completed: false,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: [...state.items.filter(todo =>
        todo.id !== action.id)]
      };
    case COMPLETE_ITEM:
      return {
        ...state,
        items: [...state.items.map(todo =>
        todo.id === action.id ?  
        { ...todo, completed: !todo.completed } :
        todo)]
      };
    default:
      return state;
  }
};

export default reducer;
