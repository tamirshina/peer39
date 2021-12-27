import Properties from './properties'
import Character from './character'
//A component to render the episode data.
export default function EpisodeData(data) {
    //object deconstructing 
    const { episode_id, title, air_date, characters } = data[0]

    return (
        <div key={episode_id} className="w-300 fixed top-[10%] left-[50%] -ml-[150px]">
            <div className="m-[1rem] p-6 border-solid border-2 rounded-lg hover:border-4 border-stone-300">
                <Properties title={title} air_date={air_date} />
                <h3>episodes characters</h3>
                {
                    characters.map((character, index) => {

                        return <Character key={index} index={index} character={character} />
                    })
                }
            </div>
        </div>
    )
}