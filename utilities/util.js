export const groupBySeason = (episodesArray) => {

    let grouped = episodesArray.reduce(
        (entryMap, e) => entryMap.set(e.season

            , [...entryMap.get(e.season

            ) || [], e]),
        new Map()
    );
    grouped.delete(' 1');

    return Array.from(grouped.values());

}
