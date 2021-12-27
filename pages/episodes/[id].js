import EpisodeData from '../../components/episodeData'
import api from '../../api/config'

//Episode page gets it's id from the next router. Data is fetch during build time using getStaticPaths.
export default function Episode({ episode }) {

    return <EpisodeData {...episode} />

}
export async function getStaticProps(context) {
    const res = await fetch(api.paths.baseUrl + api.paths.episode + context.params.id)
    const episode = await res.json()

    if (!episode || episode.length === 0) {
        return {
            notFound: true,
        }
    }

    return {
        props: { episode },
        revalidate: 1
    }
}
//We give Next all the possible paths for episodes. Next will get them at buid time.
export async function getStaticPaths() {

    const res = await fetch(api.paths.baseUrl + api.paths.allEpisodes)
    const episodes = await res.json()

    const paths = episodes.map(episode => {
        return { params: { id: episode.episode_id.toString() } }
    })
    return { paths: paths, fallback: 'blocking' }
}
