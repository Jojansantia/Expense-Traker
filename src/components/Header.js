import React from 'react';

const Header = () => {

    const Limpiar = () => {
        localStorage.clear();
        window.location.replace('');
    }

    return ( 
        <>
            <div className="container mt-10  flex flex-wrap justify-center">
                <div className="flex border w-full text-center justify-around">
                    <h1 className="my-5 text-gray-700 text-5xl font-bold  uppercase">Gastos Semanales</h1>
                    <button
                        onClick={() => Limpiar()}
                        type="submit"
                        className=" text-red-400 text-5xl uppercase mt-2 float-right"
                    >
                         <svg fill="currentColor" viewBox="0 0 21 21" className=" w-12  "><path d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    </button>
                </div>
                
            </div>
        </>
    );
}
 
export default Header;