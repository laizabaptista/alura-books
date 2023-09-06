import logo from '../../../img/logo.svg'
import './style.css'

function Logo() {
    return (<div className='logo'>
        <img src={logo} alt='Alura Books' className='logo-img'></img>
        <p><strong>Alura</strong>Books</p>
    </div>
    )
}

export default Logo;