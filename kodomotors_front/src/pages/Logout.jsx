import React, { useEffect, useState } from 'react';

import axios from "axios";
import { Link, useHistory } from 'react-router-dom';


const Logout = () => {

    const history = useHistory();

    axios.get("http://localhost:8081/logout")   //Llama al servidor para el cierre de la sesión
    .then(res => {
        history.push('/sign-in') 
    }).catch(err => console.log(err));

    return (
        <div>
          Cerrando sesión...
        </div>
    );
};

export default Logout;





