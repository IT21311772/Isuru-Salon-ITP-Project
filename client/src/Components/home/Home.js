import './clientSide.css';

function app(){
    return (
        <div className='home'>
<nav className="navbar navbar-expand-lg" style={{background:"#c762a1"}}>

  <div className="collapse navbar-collapse">
    <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link-main">Isuru Salon</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  href="./pros">Products</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  href="./contact">Contact Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  href="./packages">Packages</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  href="#">Services</a>
      </li>
      <li className="nav-New-item">
        <a className="nav-link"  href="#">Book Now</a>
      </li>
    </ul>
  </div>
</nav>
</div>
    )
    
}

export default app;