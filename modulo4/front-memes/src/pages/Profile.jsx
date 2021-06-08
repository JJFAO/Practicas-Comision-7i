import axios from 'axios';
import React, { useState } from 'react';
import { getBase64 } from '../utils';

const exampleImage =
    'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg';

export default function Profile({ user }) {
    const [image, setImage] = useState('');

    const onChangeImg = async (e) => {
        const file = e.target.files[0];
        const image = await getBase64(file);
        setImage(image);
        await axios.put('/usuarios', { image });
    };

    return (
        <div className="text-center bg-white p-2 my-5">
            <div className="d-flex justify-content-center align-items-end ml-4 m-2">
                <div
                    className="rounded-circle overflow-hidden d-flex align-items-center "
                    style={{ width: 100, height: 100, border: '2px solid #18809a' }}
                >
                    <img className="img-fluid" src={image || user.image || exampleImage} alt="profile" />
                </div>
                <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
                    <img
                        src="https://icongr.am/feather/camera.svg?size=128&color=293f8e"
                        alt="camera edit"
                        width="20"
                    />
                </label>
                <input
                    id="file-input"
                    className="d-none"
                    accept="image/png, image/jpeg"
                    type="file"
                    onChange={onChangeImg}
                />
            </div>
            <p>Nombre: {user.nombre}</p>
            {/* <FormUser token={token} /> */}
        </div>
    );
}
