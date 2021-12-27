
import api from '../../api/config'
import CharacterData from '../../components/characterData'

export default function character({ character }) {

    return <CharacterData {...character} />
}
//Since we use dynamic routing when not all paths are known we retrieve the chaeacter data on each request. 
//We can alternatively do this completely on the client side, thus losing added SEO value.   
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
