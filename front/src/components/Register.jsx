import React from 'react';

export default ({state, handleSubmit, handleEmail, handleLastName, handleName, handlePhone, handlePosition, handleCountry}) => {
    return(
       
            
                 <div className="register">
                     <p className="pRegister">¡Inscríbete y reserva tu lugar ahora!</p>
                        <form onSubmit={handleSubmit}>
                            {/* <label htmlFor="name">Nombre</label> */}
                            <p className="pForm">Nombre</p>
                            <input value={state.name} name="name" id="name" type="text" required onChange={handleName}/>

                            <p className="pForm">Apellido</p>
                            <input value={state.lastName} name="lastName" id="lastName" type="text" required onChange={handleLastName}/>

                            <p className="pForm">Correo electrónico del trabajo</p>
                            <input value={state.email} name="email" id="email" type="email" required onChange={handleEmail}/>

                            <p className="pForm">País</p>
                            <select value={state.country} name="country" id="country" required onChange={handleCountry}>
                                <option value="" selected disabled style={{color:"68737D"}}>
                                    Argentina
                                </option>
                                <option value="argentina">
                                    Argentina
                                </option>
                                <option value="otro">
                                    Otra opción
                                </option>
                            </select>

                            <p className="pForm">Número de teléfono</p>
                            <input value={state.phone} name="phone" id="phone" type="text" required onChange={handlePhone}/>

                            <p className="pForm">Puesto de trabajo</p>
                            <input value={state.position} name="position" id="position" type="text" required onChange={handlePosition}/>

                            <button type="submit" className="buttonRegister">Inscríbete</button>
                        </form>
                </div>
        
    )
}