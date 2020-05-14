import React from 'react';
import Gasto from './Gasto';

const Listado = ({gastos}) => {
    
    return ( 
        <>
            <div className="container border ml-1  text-center">
                <div className="text-center text-gray-700 text-2xl font-bold text-black  mb-4">
                    <h1>Listado</h1>
                </div>
                {gastos.map(gasto => (
                    <Gasto 
                        key={gasto.id}
                        gasto={gasto}
                    />
                ))}
            </div>
        </>
    );
}
 
export default Listado;