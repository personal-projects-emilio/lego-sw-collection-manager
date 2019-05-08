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
    };
    expect(cases.togglePossession(initState, { reference: 'sw0001a' })).toEqual({
      ...initState,
      minifigs: {
        sw0001a: {
          possessed: false
        }
      },
      numberOwned: 0,
      percentageOwned: 0
    });
    initState = {
      minifigs: {
        sw0001a: {
          possessed: false
        }
      },
      numberOwned: 0,
      percentageOwned: 0,
      totalNumber: 1
    };
    expect(cases.togglePossession(initState, { reference: 'sw0001a' })).toEqual(
      {
        ...initState,
        minifigs: {
          sw0001a: {
            possessed: true
          }
        },
        numberOwned: 1,
        percentageOwned: 100
      }
    );
  });
  it('should delete a minifig in the store', () => {
    let initState = {
      minifigs: {
        sw0001a: {
          possessed: true,
          characterName: 'Battle Droid',
          tags: ['Droid']
        },
        sw0001b: {
            possessed: false,
            characterName: 'Battle Droid',
            tags: ['Droid']
        }
      },
      numberOwned: 1,
      percentageOwned: 50,
      totalNumber: 2,
      tags: [{amount: 2, name: 'Droid'}],
      characNames: [{amount: 2, name: 'Battle Droid'}]
    };
    expect(cases.deleteMinifig(initState, { reference: 'sw0001b' })).toEqual(
      {
        ...initState,
        minifigs: {
          sw0001a: {
            possessed: true,
            characterName: 'Battle Droid',
            tags: ['Droid']
          }
        },
        numberOwned: 1,
        percentageOwned: 100,
        totalNumber: 1,
        tags: [{amount: 1, name: 'Droid'}],
        characNames: [{amount: 1, name: 'Battle Droid'}]
      }
    );
  });
  it('should set all the minifigs to owned', () => {
    let initState = {
      minifigs: {
        sw0001a: {
          possessed: true,
          characterName: 'Battle Droid',
          tags: ['Droid']
        },
        sw0001b: {
            possessed: false,
            characterName: 'Battle Droid',
            tags: ['Droid']
        },
        sw0001c: {
          possessed: false,
          characterName: 'Battle Droid',
          tags: ['Droid']
        }
      },
      numberOwned: 1,
      percentageOwned: 33,
      totalNumber: 3,
    };
    expect(cases.setPossessionToAll(initState, { possessed: true })).toEqual(
      {
        ...initState,
        minifigs: {
          sw0001a: {
            possessed: true,
            characterName: 'Battle Droid',
            tags: ['Droid']
          },
          sw0001b: {
              possessed: true,
              characterName: 'Battle Droid',
              tags: ['Droid']
          },
          sw0001c: {
            possessed: true,
            characterName: 'Battle Droid',
            tags: ['Droid']
          }
        },
        numberOwned: 3,
        percentageOwned: 100,
        totalNumber: 3,
      }
    );
  });
});
