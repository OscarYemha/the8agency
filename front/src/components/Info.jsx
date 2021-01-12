import React from 'react';
import prado1 from '../prado1.svg';
import prado2 from '../prado2.svg';
import prado3 from '../prado3.svg';
import prado4 from '../prado4.svg';


export default () => {
    return(
        <div className="info">
            
            <img src='/Group5.jpg' alt="Group5" className="Group5 Group5Up"/>
            
            <p className="pInfo"> Te invitan este webinar, donde trataremos la temática de cómo humnizar la <br/>
                experiencia del cliente de Banca y Seguros en el nuevo entorno digital. <br/><br/>
                Además podremos conocer las estrategias que aplicó LOREM para generar una <br/>
                experiencia memorable para sus clientes, mientras se convertía en el gran <br/>
                Unicorni de LATAM. <br/><br/>
                Escucha de primera mano la voz de nuestro especialistas:
            </p>
            <div className="specialists">
                <img src={prado1} alt="prado1" className="prado"/>
                <img src={prado2} alt="prado2" className="prado"/>
                <img src={prado3} alt="prado3" className="prado"/>
                <img src={prado4} alt="prado4" className="prado"/>
            </div>
            <p className="pInfo"> Participa e inspírate para innovar y mejorar la interacción entre clientes y marcas <br/>
                con historias de éxito de empresas del ámbito financiero en América Latina. <br/><br/>
                ¡Te esperamos!
            </p>

            <img src='/Group5.jpg' alt="Group5" className="Group5 Group5Down"/>
        </div>
    )
}