import React, { useState } from 'react';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    // definir el state
    const [ cantidad, guardarCantidad ] = useState(0);
    const [alert, setAlert] = useState(false)

    // Función que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10) )
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();
       
        if(cantidad <= 0){
            setAlert(true)
            return;
        }

        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
        localStorage.setItem('pregunta', JSON.stringify(false))
    }

    return ( 
        <>
            <div className="container mt-10 flex flex-wrap justify-center">
                <div className="border w-full px-3">
                    <h2 className="my-5 text-gray-700 text-5xl text-center font-bold  uppercase">Coloca tu presupuesto</h2>
                    <form
                        onSubmit={agregarPresupuesto}
                    >
                        <div className="flex justify-between mb-4 ">
                            <input
                                type="number"
                                className="appearance-none rounded border-2 mr-3 p-4 w-3/5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg "
                                placeholder="Presupuesto"
                                onChange={definirPresupuesto}
                            />

                            <button     
                                type="submit"
                                className="bg-gray-800 rounded w-2/5 ml-3 p-4 text-white uppercase  hover:bg-gray-900"
                            >
                                Definir Presupuesto
                            </button>
                        </div>
                    </form>
                    {alert &&
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4  rounded relative" role="alert">
                        <strong className="font-bold mr-3">¡Error!</strong>
                        <span className="block sm:inline">Debe ingresar un numero positivo.</span>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg className="fill-current h-6 w-6 text-red-500" role="button" onClick={() => setAlert(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                        </span>
                    </div>
}
                </div>
            </div>
        </>

     );
}


 
export default Pregunta;