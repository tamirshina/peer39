export const groupBySeason = (episodesArray) => {
    //Group episodes by season. 
    let grouped = episodesArray.reduce(
        (entryMap, e) => entryMap.set(e.season

            , [...entryMap.get(e.season

            ) || [], e]),
        new Map()
    );
    //modifying api bad listing. 
    grouped.delete(' 1');

    return Array.from(grouped.values());

}
