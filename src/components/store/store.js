
import { createStore } from 'redux';

// Начальное состояние - корзина пустая
const initialState = {
  cart: []
};

// Редюсер
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

// Создание store
const store = createStore(cartReducer);

export default store;
