import { cases } from '.';

describe('cases/minifigs', () => {
    it('should return the update state with toggle possession', () => {
      let initState = {
        minifigs: {
          sw0001a: {
            possessed: true
          }
        },
        numberOwned: 1,
        percentageOwned: 100,
        totalNumber: 1
      }
      expect(cases.togglePossession(initState, {reference: 'sw0001a'})).toEqual({
        ...initState,
          minifigs: {
            sw0001a: {
              possessed: false
            }
          },
          numberOwned: 0,
          percentageOwned: 0,
      })
      initState = {
        minifigs: {
          sw0001a: {
            possessed: false
          }
        },
        numberOwned: 0,
        percentageOwned: 0,
        totalNumber: 1
      }
      expect(cases.togglePossession(initState, {reference: 'sw0001a'})).toEqual({
        ...initState,
        minifigs: {
          sw0001a: {
            possessed: true
          }
        },
        numberOwned: 1,
        percentageOwned: 100,
    });
    });
});
