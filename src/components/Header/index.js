import Logo from './Logo'
import Options from './Options'
import Icons from './Icons'
import './style.css'

function Header() {
    return (
        <header className='App-header'>
            <Logo />
            <Options />
            <Icons />
        </header>
    )
}

export default Header;