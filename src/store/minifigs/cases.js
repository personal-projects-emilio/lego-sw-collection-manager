import dotProp from 'dot-prop-immutable';
import { getTagsAndCharacNames } from '../../shared/utility';

export const togglePossession = (state, action) => {
  const { reference } = action;
  // We update the minifigs with our updatedMinifig
  const updatedMinifigs = dotProp.toggle(state.minifigs, `${reference}.possessed`);
  // Then we update the total owned and percentage owned
  const updatedTotalOwned = updatedMinifigs[reference].possessed ? state.numberOwned + 1 : state.numberOwned - 1;
  const updatedPercentageOwned = Math.round(updatedTotalOwned / state.totalNumber * 10000) / 100;
  return {
    ...state,
    minifigs: updatedMinifigs,
    numberOwned: updatedTotalOwned,
    percentageOwned: updatedPercentageOwned
  }
}

export const deleteMinifig = (state, action) => {
  const { minifigs, totalNumber, numberOwned } = state;
  const { reference } = action;
  const newTotal = totalNumber - 1;
  const updatedNumberOwned = minifigs[reference].possessed ? numberOwned - 1 : numberOwned;
  const percentageOwned = Math.round(updatedNumberOwned / newTotal * 10000) / 100;
  const updatedMinifigs = dotProp.delete(minifigs, reference);
  const data = getTagsAndCharacNames(updatedMinifigs);
  return {
    ...state,
    minifigs: updatedMinifigs,
    numberOwned: updatedNumberOwned,
    percentageOwned: percentageOwned,
    totalNumber: newTotal,
    tags: data.tags,
    characNames: data.characNames,
  }
}

export const setPossessionToAll = (state, action) => {
  const { possessed } = action;
  const { minifigs, totalNumber } = state;
	let updatedMinifigs = {};
	Object.keys(minifigs).forEach(minifig => 
		updatedMinifigs[minifig] = dotProp.set(minifigs[minifig], 'possessed', possessed)
  );
  const numberOwned = possessed ? totalNumber : 0;
  const percentageOwned = possessed ? 100 : 0;
	return {
    ...state,
    minifigs: updatedMinifigs,
    numberOwned,
    percentageOwned
  }
}