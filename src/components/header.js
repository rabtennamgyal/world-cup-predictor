import logo from '../assets/logo/logo.svg';


function Header() {
    return (
        <div className="header">
            <img id='logo' src={logo} alt='logo' />
        </div>
    )
};

export default Header;