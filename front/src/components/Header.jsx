import React from 'react';
import Group4 from '../Group4.svg';

export default () => {
    return(
        <div className="header" style={{backgroundImage: `url(${Group4})`}}>
            <header>
                <button className="buttonHeader">WEBINAR</button>

                <h1>El reto de humanizar el CX financiero en 2021.</h1> 

                <h1 style={{fontStyle:"italic"}}>La experiencia de un Unicornio de Latam</h1>

                <p className="pHeader">MIÉRCOLES 16 DE DICIEMBRE|17HS(HORARIO DE QUITO)</p>
            </header>
        </div>
    )
}