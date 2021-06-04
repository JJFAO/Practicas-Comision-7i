import Meme from './Meme';

export default function Memes({ memes }) {

    return (
            <div className="d-flex flex-wrap">
                {memes.map((meme) => (
                    <Meme meme={meme} key={meme._id} />
                ))}
            </div>
    );
}
