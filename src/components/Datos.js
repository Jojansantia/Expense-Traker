import React from 'react';

const Datos = ({presupuesto, restante}) => {
    let clas="  rounded  border-2 py-2 my-auto px-3 text-gray-700  focus:outline-none focus:shadow-lg "
    const c1 = "bg-green-300"
    const c2 = "bg-yellow-300"
    const c3 = "bg-red-300"

    if (restante >= (presupuesto*0.7)) {
        clas = clas + c1
    } else if( (restante < (presupuesto*0.7)) && (restante > (presupuesto*0.25))  ) {
        clas = clas + c2
    }else {
        clas = clas + c3
    }

    return ( 
        <div className=" flex border  justify-between container my-2 px-2 py-4">
                <div className="text-center  ">
                        <label className=" mr-2  text-gray-700 text-xl font-bold my-auto" htmlFor="nombre">
                            Presupuesto:
                        </label>
                        <input
                            className=" rounded m-auto border-2 py-2 my-auto py-2 px-3 text-gray-700  focus:outline-none focus:shadow-lg "
                            id="nombre"
                            type="nombre"
                            placeholder="Presupuesto"
                            value={presupuesto}
                            readOnly={true}
                        />
                        </div>
                    <div className="text-center">
                        <label className=" mr-2 text-gray-700 text-xl font-bold my-auto" htmlFor="nombre">
                            Restante:
                        </label>
                        <input
                            className={ clas} 
                            id="nombre"
                            type="nombre"
                            placeholder="000000"
                            readOnly={true}
                            value={restante}
                        />
                    </div>
                </div>
     );
}
 
export default Datos;