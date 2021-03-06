import React, { useState, useEffect } from 'react';
import Form from './components/form';
import Listado from './components/listado';
import Header from './components/Header';
import Footer from './components/footer';
import Pregunta from './components/Pregunta';
import Datos from './components/Datos';

function App() {

  // Obtener del local storage
  let listadoInicial = JSON.parse(localStorage.getItem('gastos'));
  let pregunta = JSON.parse(localStorage.getItem('pregunta'));
  let presupuestoInicial = JSON.parse(localStorage.getItem('presupuesto'));
  let restanteInicial = JSON.parse(localStorage.getItem('restante'));

  if(!listadoInicial) {
    listadoInicial = [];
  }
  if(restanteInicial === null){
    restanteInicial= presupuestoInicial
  }
  if(pregunta === null) {
    pregunta = true;
  }

  const [ restante, guardarRestante] = useState(restanteInicial);
  const [ presupuesto, guardarPresupuesto] = useState(presupuestoInicial);
  const [ gastos, guardarGastos] = useState(listadoInicial);
  const [ mostrarpregunta, actualizarPregunta ] = useState(pregunta);
  const [ gasto, guardarGasto ] = useState({});
  const [ creargasto, guardarCrearGasto ] = useState(false);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    let listadoInicial = JSON.parse(localStorage.getItem('gastos'));
  
    if(listadoInicial) {
      localStorage.setItem('gastos', JSON.stringify(gastos))
    } else {
      localStorage.setItem('gastos', JSON.stringify([]));
    }

    if(!pregunta){
      localStorage.setItem('presupuesto', JSON.stringify(presupuesto));
      
    }
  }, [gastos, pregunta, presupuesto] );

  useEffect(() => {
    if(creargasto) {
        guardarGastos([
          ...gastos,
          gasto
        ]);
        guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos]);

  return(
    <>
    <div className="mb-5 mx-5 md:m-auto sm:m-auto md:w-3/5 sm:w-4/5">
      { mostrarpregunta ?  
      ( 
        <Pregunta 
          guardarPresupuesto={guardarPresupuesto}
          guardarRestante={guardarRestante}
          actualizarPregunta={actualizarPregunta}
        />
      )  :  (
        <div className=" ">
          <div className=" container-fluid  m-auto">
            <Header
              
            />  
            <Datos
              presupuesto={presupuesto}
              restante={restante}
            />  
          </div>
          <div className=" container-fluid flex  justify-center">
            <Form
              guardarGasto={guardarGasto}
              guardarCrearGasto={guardarCrearGasto}
              restante={restante}
              guardarRestante={guardarRestante}
            />
            <Listado
              gastos={gastos}
            />
          </div>
          <Footer/>
        </div>
      )}
    </div>
    </>
  )
}

export default App;
