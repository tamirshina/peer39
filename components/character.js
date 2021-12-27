import Link from 'next/link'
//Each character is also a Next Link to the character page.
export default function Character({ index, character }) {

    //The api is not perfect and need some modification as some names conflict in the api. For instance Mike family name is missspelled. 
    const getCharacterName = (character) => {
        if (!character.includes('Walter')) {
            return character.substr(0, character.indexOf(' '))
        } else {
            return character.replace(' ', '+')
        }
    }
    return (
        <div key={index}>
            <Link href={`/characters/${getCharacterName(character)}`}>
                <div className="font-semibold hover:text-blue-600">
                    {character}
                </div>
            </Link>
        </div>
    )
}