/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <NavLink exact activeClassName="is-active" className="navbar-item" to="/">
        <h1>Courses</h1>
      </NavLink>
      <NavLink exact activeClassName="is-active" className="navbar-item" to="/create">
        <h1>Create</h1>
      </NavLink>
    </div>
  </nav>
)

export default Navbar;
