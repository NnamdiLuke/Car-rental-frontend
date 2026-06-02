// actions.js
export const SET_SELECTED_CAR = 'SET_SELECTED_CAR';

export const setSelectedCar = (car) => {
  return {
    type: SET_SELECTED_CAR,
    payload: car,
  };
};