
import Link from 'next/link'
import Properties from './properties'
//component to build each episode card.
export default function EpisodeComponent({ episode_id, title, air_date, characters }) {
    return (
        <li key={episode_id}>
            <Link href={`/episodes/${episode_id}`} >
                <div className="card">
                    <Properties title={title} air_date={air_date} />
                    <h3>episodes characters</h3>
                    <ul className="-ml-[35px] -mt-[15px]">
                        {characters.map(character => <li key={character}>{character}</li>)}
                    </ul>
                </div>
            </Link>
        </li>
    )
}