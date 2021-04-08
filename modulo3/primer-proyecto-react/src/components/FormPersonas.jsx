import { useState } from 'react';

export default function FormPersonas() {
    const [personas, setPersonas] = useState([]);
    const [nombre, setNombre] = useState('');
    const [classBoton, setClassBoton] = useState('btn-primary');
    const [bool, setBool] = useState(false);

    const handleChange = (event) => {
        const { value } = event.target;
        setNombre(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setPersonas([...personas, nombre]);
        setClassBoton('btn-danger');
    };

    const handleSwitch = () => {
        setBool(!bool);
    }
    

    return (
        <div className="card p-5 mx-auto" style={{ width: '400px' }}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                    />
                </div>
                <div class="custom-control custom-switch">
                    <input checked={bool} type="checkbox" class="custom-control-input" id="customSwitch1" onChange={handleSwitch} />
                    <label class="custom-control-label" htmlFor="customSwitch1">
                        Toggle this switch element
                    </label>
                </div>
                <button type="submit" className={`btn ${classBoton}`}>
                    Enviar
                </button>
                {nombre}
            </form>
            <ul className="mt-4">
                {personas.map((persona) => (
                    <li>{persona}</li>
                ))}
            </ul>
        </div>
    );
}
