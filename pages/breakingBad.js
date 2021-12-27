import Episode from '../components/episodeComponent'
import { groupBySeason } from '../utilities/util'
import api from '../api/config'

//Main page, gets all episodes and lists them by season. defualt behavior was overriden in next.config.
export default function Episodes({ episodes }) {

    //Divide episodes by season.
    const arryOfSeasons = groupBySeason(episodes)

    return (
        <main>
            <h1 className="m-4" >Breakin Bad Episodes</h1>
            <ul>
                {arryOfSeasons.map((arrayOfEpisodes, index) => {
                    return (
                        <li key={index}>
                            <h2 className="m-4">Season {index + 1}</h2>
                            <ul className="min-h-full flex grow flex-wrap">
                                {arrayOfEpisodes.map((data, index) => {
                                    return <Episode key={index} {...data} />
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}
//Next will fetch and generate this page at build time! meaning two things - one- fast loading for the client. two- better SEO. 
//If page isn't found redirect to 404
export async function getStaticProps() {
    const res = await fetch(api.paths.baseUrl + api.paths.allEpisodes)
    const episodes = await res.json()

    if (!episodes) {
        return {
            notFound: true,
        }
    }

    return {
        props: { episodes },
    }
}
