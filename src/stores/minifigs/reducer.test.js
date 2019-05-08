import reducer from ".";
import { types } from ".";

describe("reducer/minifigs", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      minifigs: null,
      totalNumber: null,
      numberOwned: null,
      percentageOwned: 0,
      tags: null,
      characNames: null
    };
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should set the minifigs", () => {
    const action = {
      type: types.SET.MINIFIGS,
      minifigs: { test: "Test" }
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      minifigs: { test: "Test" }
    });
  });

  it("should set the statistics", () => {
    const action = {
      type: types.SET.STATISTICS,
      statistics: {
        totalNumber: 2,
        numberOwned: 2,
        percentageOwned: 100
      }
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      totalNumber: 2,
      numberOwned: 2,
      percentageOwned: 100
    });
  });
  it("should set the tags and characNames", () => {
    const action = {
      type: types.SET.TAGS_AND_CHARACNAMES,
      data: {
        tags: ["tag1", "tag2"],
        characNames: ["charac", "test"]
      }
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      tags: ["tag1", "tag2"],
      characNames: ["charac", "test"]
    });
  });
  it("should toggle the possession of a minifig", () => {
    const action = {
      type: types.TOGGLE.POSSESSION,
      reference: "sw0001a"
    };
    const initState = {
      ...initialState,
      minifigs: { sw0001a: { possessed: false } },
      numberOwned: 0,
      totalNumber: 1,
      percentageOwned: 0
    };
    expect(reducer(initState, action)).toEqual({
      ...initState,
      minifigs: {
        sw0001a: {
          possessed: true
        }
      },
      numberOwned: 1,
      percentageOwned: 100
    });
  });
  it("should toggle the possession of a minifig", () => {
    const action = {
      type: types.DELETE.MINIFIG,
      reference: "sw0001b"
    };
    const initState = {
      ...initialState,
      minifigs: {
        sw0001a: {
          possessed: true,
          characterName: "Battle Droid",
          tags: ["Droid"]
        },
        sw0001b: {
          possessed: true,
          characterName: "Battle Droid",
          tags: ["Droid"]
        }
      },
      numberOwned: 2,
      percentageOwned: 100,
      totalNumber: 2
    };
    expect(reducer(initState, action)).toEqual({
      ...initState,
      minifigs: {
        sw0001a: {
          possessed: true,
          characterName: "Battle Droid",
          tags: ["Droid"]
        }
      },
      numberOwned: 1,
      totalNumber: 1,
      tags: [{ amount: 1, name: "Droid" }],
      characNames: [{ amount: 1, name: "Battle Droid" }]
    });
	});
	it("should set all the minifigs to missing", () => {
    const action = {
      type: types.SET.POSSESION_TO_ALL,
      possessed: false
    };
    const initState = {
      ...initialState,
      minifigs: {
        sw0001a: {
          possessed: true,
          characterName: "Battle Droid",
          tags: ["Droid"]
        },
        sw0001b: {
          possessed: true,
          characterName: "Battle Droid",
          tags: ["Droid"]
        }
      },
      numberOwned: 2,
      percentageOwned: 100,
      totalNumber: 2
    };
    expect(reducer(initState, action)).toEqual({
      ...initState,
      minifigs: {
        sw0001a: {
          possessed: false,
          characterName: "Battle Droid",
          tags: ["Droid"]
        },
        sw0001b: {
          possessed: false,
          characterName: "Battle Droid",
          tags: ["Droid"]
        }
      },
      numberOwned: 0,
			totalNumber: 2,
			percentageOwned: 0,
    });
  });
});
