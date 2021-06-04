import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Memes from '../components/Memes';

export default function Main() {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        const getMemes = async () => {
            const response = await axios.get(`/memes`);
            setMemes(response.data);
        };

        getMemes();
    }, []);

    return (
        <div>
            <h3>Memes</h3>
            <Memes memes={memes} />
        </div>
    );
}
