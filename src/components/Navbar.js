import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';

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
          <div className="dropdown text-end">
            <div className="user">
              <BiUserCircle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
