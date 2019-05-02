import dotProp from 'dot-prop-immutable';

export const togglePossession = (state, action) => {
  const { reference } = action;
  // We update the minifigs with our updatedMinifig
  const updatedMinifigs = dotProp.toggle(state.minifigs, `${reference}.possessed`);
  // Then we update the total owned and percentage owned
  const updatedTotalOwned = updatedMinifigs[reference].possessed ? state.numberOwned + 1 : state.numberOwned - 1;
  const updatedPercentageOwned = Math.round(updatedTotalOwned/state.totalNumber*10000)/100;
  return {
    ...state,
    minifigs: updatedMinifigs,
    numberOwned: updatedTotalOwned,
    percentageOwned: updatedPercentageOwned
  };
};