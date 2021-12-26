import useFetch from '../../utilities/useFetch'
import { useRouter } from 'next/router'
import api from '../../api/config'
import Loader from '../../utilities/Loader'
import CharacterData from './characterData'

export default function character() {

    const router = useRouter()
    const { name } = router.query
    const { data } = useFetch(api.paths.baseUrl + api.paths.character + name)

    return (
        <div key={name}>
            <div>
                {!data ? <Loader /> : <CharacterData {...data} />}
            </div>
        </div>
    )
}