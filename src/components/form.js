import React, {useState} from 'react';
const shortid = require('shortid');

const Form = ({guardarGasto, guardarCrearGasto, restante , guardarRestante}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState('');

    const agregarGasto = e => {
    e.preventDefault();
    let id = shortid.generate()

    // resetear el form
    const gasto = {
        nombre, 
        cantidad, 
        id
    }

    // pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);
    let asd = restante-cantidad
    guardarRestante(asd)
    localStorage.setItem('restante', JSON.stringify(asd));
    guardarNombre('');
    guardarCantidad('');
}

    return ( 
        <>
            <div className="container  border mr-1   ">
                <h1 className="text-center text-gray-700 text-2xl font-bold text-black ">
                    Form
                </h1>
                <div className="flex justify-center mt-5">
                    <div className="w-full px-5 max-w-sm">
                        <form onSubmit={agregarGasto}>
                            <div className="mb-4 ">
                                <label className="  text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                                Gasto
                                </label>
                                <input
                                    className="appearance-none rounded border-2  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                                    id="nombre"
                                    name="nombre"
                                    type="text"
                                    placeholder="Ej: Transporte"
                                    onChange={e => guardarNombre(e.target.value)}
                                    value={nombre}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cantidad">
                                    Cantidad
                                </label>
                                <input
                                    className="appearance-none rounded border-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                                    id="cantidad"
                                    name="cantidad"
                                    type="number"
                                    placeholder="Cantidad"
                                    onChange={e => guardarCantidad( parseInt( e.target.value, 10 ) )}
                                    value={cantidad}
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-gray-800 mb-4 w-full my-200 p-2 text-white uppercase  hover:bg-gray-900"
                            >
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Form;