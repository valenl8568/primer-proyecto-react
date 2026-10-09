import FotoPerfil from '../images/hhhhhiiiii.jpg'

function MenuUsuario(){
    const nombre = 'valentina'
    const rol = 'soy desarolladora'

    return(
        <div className='menu-usuario'>
            <button type='button' className='menu-usuario-boton'>
                <img src={FotoPerfil} alt={`foto de ${nombre}`}className='avatar'/>
                <spam className='menu-usuario-datos'>
                    <samp className='menu-ususario-nombre'>{nombre}</samp>
                    <samp className='menu-ususario-rol'>{rol}</samp>
                </spam>
                <samp className='flecha'></samp>
            </button>

            <ul className='menu-desplegable'>
                <li><a href='#'>mi perfil</a></li>
                <li><a href='#'>configuracion</a></li>
                <li className='separador'></li>
                <li><a href='#'className='cerrar-sesion'>cerrar sesion</a></li>
            </ul>
        </div>
    )
}

export default MenuUsuario