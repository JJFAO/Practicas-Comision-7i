export default function Meme({ meme }) {
    const { creator, createdAt, urlImage, title } = meme;
    const fecha = new Date(createdAt).toLocaleString();

    return (
        <div className="">
            <div className="p-2 my-3" style={{width: 200}}>
                <div style={{ fontSize: '0.7rem' }}>by {creator.nombre}</div>
                <h3>{title}</h3>
                <img src={urlImage} alt="meme" className="img-fluid" />
                <div className="d-flex justify-content-between m-2">
                    <span style={{ fontSize: '0.7rem' }}>
                        Publicado el: <strong>{fecha}</strong>
                    </span>
                    <img
                        src="https://icongr.am/feather/heart.svg?size=128&color=ba1c1c"
                        alt="like"
                        width="25"
                    />
                </div>
            </div>
        </div>
    );
}
