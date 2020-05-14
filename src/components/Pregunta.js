import React, { useState } from 'react';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    // definir el state
    const [ cantidad, guardarCantidad ] = useState(0);

    // Función que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10) )
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();
        // si se pasa la validación
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
        localStorage.setItem('pregunta', JSON.stringify(false))
    }

    return ( 
        <>
            <div className="container mt-10  flex flex-wrap justify-center">
                <div className="border w-full text-center justify-center">
                    <h2 className="  my-5 text-gray-700 text-5xl font-bold  uppercase">Coloca tu presupuesto</h2>
                    <form
                        onSubmit={agregarPresupuesto}
                    >
                        <div className=" w-full flex justify-around mb-4 ">
                            <input
                                type="text"
                                className="appearance-none rounded border-2 mx-3 p-4 w-3/5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                                placeholder="Presupuesto"
                                onChange={definirPresupuesto}
                            />

                            <button     
                                type="submit"
                                className="bg-gray-800 rounded w-2/5 mx-3 p-4 text-white uppercase  hover:bg-gray-900"
                                
                            >
                                Definir Presupuesto
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

     );
}


 
export default Pregunta;