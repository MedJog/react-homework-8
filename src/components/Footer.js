const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer-items">
        <div className="footer-rights">© 2023  Brand  All Rights Reserved.</div>
        <div className="footer-social">
          <div className="social-icon-block"><a className="social-icon-link" href="#"><i className="social-icon fa-brands fa-facebook-f fa-2xl"></i></a></div>
          <div className="social-icon-block"><a className="social-icon-link" href="#"><i className="social-icon fa-brands fa-twitter fa-2xl"></i></a></div>
          <div className="social-icon-block"><a className="social-icon-link" href="#"><i className="social-icon fa-brands fa-pinterest-p fa-2xl"></i></a></div>
          <div className="social-icon-block"><a className="social-icon-link" href="#"><i className="social-icon fa-brands fa-instagram fa-2xl"></i></a></div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;