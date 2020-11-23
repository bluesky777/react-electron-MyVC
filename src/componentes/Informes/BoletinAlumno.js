import React, { useEffect, useState } from 'react'
import myAxios from '../../utils/httpLocal'

function BoletinAlumno(props) {
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        console.log(props, myAxios.defaults.baseURL);
        const traerDatos = async () => {
            try {
                const data = await myAxios.get('/reports/datos-boletin')
                console.log(data)
                
            } catch (error) {
                console.log(error)
            }
        }
        traerDatos();

        setCargando(true)
        return () => {
            
        }
    }, [])

    return (
        <div>
            {cargando ? 
            <div>Cargando boletín</div>
            :
            <h2>Terminó de cargar</h2>}
        </div>
    )
}

export default BoletinAlumno