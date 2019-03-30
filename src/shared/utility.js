export const getStatistics = (minifigs) => {
    const totalNumber = Object.keys(minifigs).length;
    let numberOwned = 0;
    for (const i in minifigs) {
        minifigs[i].possessed && numberOwned++
    }
    const percentageOwned = Math.round(numberOwned/totalNumber*10000)/100;
    return {totalNumber: totalNumber, numberOwned: numberOwned, percentageOwned: percentageOwned}
}

export const getTagsAndCharacNames = (minifigs) => {
    let tags = [];
    let characNames = [];
    for (const i in minifigs) {
        const minifigTags = minifigs[i].tags;
        if (minifigTags) {
            for(let i in minifigTags){
                let index = tags.map(tag => tag.name).indexOf(minifigTags[i]);
                // If the tag is unique we had it to the array
                if(index === -1){
                    tags.push({name: minifigTags[i], amount: 1});
                } else { // Or else we increment the amount of the existing tag
                    tags[index].amount++;
                }
            }
        }
        // We do the same with the character name
        const characName = minifigs[i].characterName;
        let index = characNames.map(charac => charac.name).indexOf(characName);
        if(index === -1){
            characNames.push({name: characName, amount: 1});
        } else {
            characNames[index].amount++;
        }
    }
    tags.sort((a,b) => (a.name > b.name) ? 1 : -1);
    characNames.sort((a,b) => (a.name > b.name) ? 1 : -1);
    return {tags: tags, characNames: characNames};
}