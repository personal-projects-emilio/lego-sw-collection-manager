import { getStatistics, getTagsAndCharacNames } from "./utility";

describe('utility', () => {
    const minifigs = {
      sw0001a: {
        characterName: "Battle Droid",
        name: "...",
        possessed: true,
        tags: [ "Battle Droid", "CIS", "Droid" ]
      },
      sw0001b: {
        characterName: "Battle Droid",
        name: "...",
        possessed: true,
        tags: [ "Battle Droid", "CIS", "Droid" ]
      },
      "sw0003" : {
        "characterName" : "Darth Maul",
        "name" : "Darth Maul",
        "possessed" : true,
        "tags" : null
      },
      "sw0002" : {
        "characterName" : "Boba Fett",
        "name" : "Boba Fett - Classic Grays",
        "possessed" : true,
        "tags" : [ "Bounty Hunter" ]
      }
    }
    it('should return the minifigs statistics', () => {
      expect(getStatistics(minifigs)).toEqual({
        totalNumber: 4,
        numberOwned: 4,
        percentageOwned: 100
      })
    });
    it('should return the minifigs tags and character names', () => {
      expect(getTagsAndCharacNames(minifigs)).toEqual({
        tags: [
          {name: 'Battle Droid', amount: 2},
          {name: 'Bounty Hunter', amount: 1},
          {name: 'CIS', amount: 2},
          {name: 'Droid', amount: 2}
        ],
        characNames: [
          {name: 'Battle Droid', amount: 2},
          {name: 'Boba Fett', amount: 1},
          {name: 'Darth Maul', amount: 1}
        ],
      })
    });
});