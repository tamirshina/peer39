import Episode from '../components/episodeComponent'
import { groupBySeason } from '../utilities/util'
import api from '../api/config'

function Episodes({ episodes }) {

    const arryOfSeasons = groupBySeason(episodes)

    return (
        <>
            <div>
                <h1 className="m-4" >Breakin Bad Episodes</h1>
            </div>
            {arryOfSeasons.map((arrayOfEpisodes, index) => {
                return (
                    <div key={index}>
                        <h2 className="m-4">Season {index + 1}</h2>

                        <main className="min-h-full flex grow flex-wrap">

                            {arrayOfEpisodes.map((data, index) => {

                                return <Episode key={index} {...data} />
                            })}
                        </main>
                    </div>
                )
            })}
        </>
    )
}

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
export default Episodes;
