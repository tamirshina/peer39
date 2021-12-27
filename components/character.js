import Link from 'next/link'
export default function Character({ index, character }) {

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