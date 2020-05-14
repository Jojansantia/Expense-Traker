import React from 'react';

const Gasto = ({gasto}) => {

    return ( 
        <>
            <div className=" flex   ">
                <div className="border w-2/3 p-1  ">
                    {gasto.nombre}
                </div>
                <div className="border w-1/3 p-1  ">
                    $ {gasto.cantidad}
                </div>
            </div>
        </>
    );
}
 
export default Gasto;