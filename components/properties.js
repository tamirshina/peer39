//component for readability.
export default function Properties({ title, air_date }) {
    return (
        <>
            <h2>{title}</h2>
            <h3>Air Date</h3>
            <p>{air_date}</p>
        </>
    )
}