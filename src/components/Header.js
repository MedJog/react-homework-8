import { Link } from 'react-router-dom';

const Header = () => {
 return (
  <header className="header">
  <div className="container">
    <div className="header-items">
      <div className="header-left">
        <div className="header-item">
          <Link to="/"><img className="logo-img" src="/images/logo.svg" alt="logo" /></Link>
        </div>
        <div className="header-item">
          <i className="icon fa-solid fa-magnifying-glass fa-2xl"></i>
        </div>
      </div>
      <div className="header-right">
        <div className="header-item drop-down-menu">
          <i className="icon menu fa-solid fa-bars fa-2xl"></i>
        </div>
        <div className="header-item">
          <Link to="/registration"><i className="icon user fa-regular fa-user fa-2xl"></i></Link>
        </div>
        <div className="header-item">
          <Link to="/cart"><i className="icon basket fa-solid fa-cart-shopping fa-2xl"></i></Link>
          </div>
      </div>
    </div>
  </div>
</header>
 );
}

export default Header;
