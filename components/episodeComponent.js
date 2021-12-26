
import Link from 'next/link'
import Properties from './properties'

export default function EpisodeComponent({ episode_id, title, air_date, characters }) {
    return (
        <div key={episode_id}>
            <Link href={`/episodes/${episode_id}`} >
                <div className="card">
                    <Properties title={title} air_date={air_date} />
                    <h3>episodes characters</h3>
                    <p>{characters}</p>
                </div>
            </Link>
        </div>
    )
}