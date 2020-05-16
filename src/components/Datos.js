import React from 'react';

const Datos = ({presupuesto, restante}) => {
    let bgrestante="border-b-4  my-auto px-3 text-gray-700 text-xl focus:outline-none focus:shadow-lg "
    const c1 = "border-green-600"
    const c2 = "border-yellow-600"
    const c3 = "border-red-600"

    if (restante >= (presupuesto*0.7)) {
        bgrestante = bgrestante + c1
    } else if( (restante < (presupuesto*0.7)) && (restante > (presupuesto*0.25))  ) {
        bgrestante = bgrestante + c2
    }else {
        bgrestante = bgrestante + c3
    }

    return ( 
        <div className=" flex border  my-2 px-2 py-4">
                <div className="text-center w-1/2  flex justify-center ">
                        <label className=" mr-2  text-gray-700 text-xl font-bold " htmlFor="nombre">
                            Presupuesto:
                        </label>
                        
                        <h2
                        className="my-auto text-gray-700 text-xl"
                        >$ {presupuesto}</h2>
                        </div>
                    <div className="text-center w-1/2  flex justify-center ">
                        <label className=" mr-2 text-gray-700 text-xl font-bold " htmlFor="nombre">
                            Restante:
                        </label>
                        <h2
                            className={bgrestante} 
                        >
                            $ {restante}
                        </h2>       
                        
                        
                    </div>
                </div>
     );
}
 
export default Datos;