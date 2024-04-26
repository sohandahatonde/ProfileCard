import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="container">
     <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4">ProfileCard</span>
      </Link>

      <ul className="nav nav-pills">
        <li className="nav-item ms-4 fs-4"><Link to="/Admin" className="nav-link">Admin</Link></li>
      </ul>
    </header>
    </div>
  )
}

export default Navbar
