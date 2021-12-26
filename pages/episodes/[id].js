
import useFetch from '../../utilities/useFetch'
import { useRouter } from 'next/router'
import EpisodeData from './episodeData'
import Loader from '../../utilities/Loader'
import api from '../../api/config'

export default function Episode() {

    const router = useRouter()
    const { id } = router.query
    const { data } = useFetch(api.paths.baseUrl + api.paths.episode + id)

    return (
        <>
            {
                !data ? <Loader /> : <EpisodeData {...data} />
            }
        </>
    )
}