import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  // const activeClassName = 'active-link';

  return (
    <header className="p-3 mb-3 border-bottom bg-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none Bookstore-CMS">
            Bookstore CMS
          </div>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className="nav-link px-2 nav-links mr-10"
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" class="rounded-circle" width="32" height="32">
          </a>
          <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
