import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

// En este ejemplo crearemos un formulario para cargar artículos.
// 1- Para este componente copiamos el ejemplo de formulario con validaciones de react Bootstrap.
// 2- Editamos su contenido y agregamos las funciones y estados necesarios.
// 3- Agregamos un state y una función que guarde los datos del formulario. (input, handleChange)
// 4- Y un estado donde guardar el array de artículos. (articulos)
// 5- En la función handleSubmit actualizamos el state articulos, solo cuando todos los campos estén validados.

const setLStorageItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const initialArticulos = JSON.parse(localStorage.getItem('articulos')) || [];

export default function CustomForm() {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({});
    const [articulos, setArticulos] = useState(initialArticulos);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === true) {
            // Cuando los campos estén completos, agregamos el artículo al array.
            const newArticulos = [...articulos, input];
            setArticulos(newArticulos);
            setLStorageItem('articulos', newArticulos);
            form.reset();
            setValidated(false);
        } else {
            setValidated(true);
        }
    };

    const handleChange = (event) => {
        // Extraemos y guardamos en variables, el nombre y el valor del input en el que escribió el usuario.
        const { value, name } = event.target;

        // Declaramos un objeto que contiene las propiedades del state input,
        // más lo que escribe el usuario usando el name y value. Con ese objeto actualizamos el estado.
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    };

    return (
        <Form
            className="card p-4 mx-auto my-5"
            style={{ maxWidth: '500px' }}
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
        >
            <Form.Group controlId="titulo">
                <Form.Label>Título</Form.Label>
                <Form.Control onChange={handleChange} name="titulo" required type="text" />
                <Form.Control.Feedback>Campo completo</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Datos incorrectos</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="imagen">
                <Form.Label>Imagen</Form.Label>
                <Form.Control onChange={handleChange} name="imagen" required type="text" />
                <Form.Control.Feedback>Campo completo</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Datos incorrectos</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="descripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control onChange={handleChange} name="descripcion" required type="text" />
                <Form.Control.Feedback>Campo completo</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Datos incorrectos</Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Enviar</Button>
        </Form>
    );
}
