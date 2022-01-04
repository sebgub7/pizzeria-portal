import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNav = () => (
  <div>
    <NavLink exact to={`/`} activeClassName={'active'}>Home</NavLink>
    <NavLink to={`/bookings`} activeClassName={'active'}>Bookings</NavLink>
    <NavLink to={`/ordering`} activeClassName={'active'}>Ordering</NavLink>
    <NavLink to={`/kitchen`} activeClassName={'active'}>Kitchen</NavLink>
    <NavLink to={`/login`} activeClassName={'active'}>Login</NavLink>
  </div>
);

console.log(process.env.PUBLIC_URL);

export default PageNav;