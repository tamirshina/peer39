
import { useRouter } from 'next/router'
import api from '../../api/config'
import Loader from '../../utilities/Loader'
import CharacterData from '../../components/characterData'

export default function character({ character }) {

    const router = useRouter();

    if (router.isFallback) return <Loader />

    return <CharacterData {...character} />
}

export async function getServerSideProps(context) {
    const res = await fetch(api.paths.baseUrl + api.paths.character + context.params.name)
    const character = await res.json()
    if (!character || character.length === 0) {
        return {
            notFound: true,
        }
    }
    return {
        props: { character }
    }
}
