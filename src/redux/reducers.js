// reducers.js
import { SET_SELECTED_CAR } from './actions';

const initialState = {
  selectedCar: null,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_CAR:
      return {
        ...state,
        selectedCar: action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;