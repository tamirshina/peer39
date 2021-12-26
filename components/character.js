import Link from 'next/link'
export default function Character({ index, character }) {
    return (
        <div key={index}>
            <Link href={`/characters/${character.replace(' ', '+')}`}>
                <div className="font-semibold hover:text-blue-600">
                    {character}
                </div>
            </Link>
        </div>
    )
}