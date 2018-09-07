export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';

export const increaseCounter = () => (dispatch) => {
  return dispatch({
    type: INCREASE_COUNTER
  });
};

export const decreaseCounter = () => (dispatch) => {
  return dispatch({
    type: DECREASE_COUNTER
  });
};
