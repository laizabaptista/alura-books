import perfil from '../../../img/perfil.svg'
import sacola from '../../../img/sacola.svg'
import './style.css'

const icones = [perfil, sacola];

function Icons() {
    return (<ul className='icones'>
        {icones.map((icone) => (
            <li className='icone'><img src={icone} alt="icone"></img></li>
        ))}
    </ul>)
}

export default Icons;