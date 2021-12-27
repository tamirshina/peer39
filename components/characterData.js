//Component to render character data.
export default function characterData(data) {
    const { name, birthday, nickname, img, status, occupation } = data[0]
    return (
        <div key={name} className="flex justify-around">
            <div>
                <h1>name</h1>
                <h2>{name}</h2>
            </div>
            <div>
                <h3>birthday</h3>
                <p>{birthday}</p>
                <h3>nickname</h3>
                <p>{nickname}</p>
                <h3>status</h3>
                <p>{status}</p>
                <h3>occupation</h3>
                <p>{occupation}</p>
            </div>
            <img src={img} alt='image' className="max-w-[450px] max-h-[650px]"></img>
        </div>
    )
}