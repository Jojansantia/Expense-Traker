import React from 'react';

const Footer = () => {
    let año = new Date().getFullYear();
    return ( 
        <>
            <div className="flex border mt-2 w-full text-center justify-around">
                <h1 className="my-4 text-gray-700 text-2xl font-bold  uppercase">Jojansantia &copy; {año} </h1> 
            </div>
        </>
     );
}
 
export default Footer;