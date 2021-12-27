

import { useRouter } from 'next/router'
import EpisodeData from '../../components/episodeData'
import Loader from '../../utilities/Loader'
import api from '../../api/config'

export default function Episode({ episode }) {


    const router = useRouter();

    if (router.isFallback) return <Loader />
    if (!episode) return null
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
export async function getStaticPaths() {

    const res = await fetch(api.paths.baseUrl + api.paths.allEpisodes)
    const episodes = await res.json()

    const paths = episodes.map(episode => {
        return { params: { id: episode.episode_id.toString() } }
    })
    return { paths: paths, fallback: 'blocking' }
}
