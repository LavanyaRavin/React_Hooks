import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
    <div><b>MENU</b></div>

    <nav>
    <ul style={{listStyle:"none"}}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/list">list rendering</Link>
      </li>
      <li>
        <Link to="/usestate">usestate</Link>
      </li>
      <li>
        <Link to="/useeffect">useeffect</Link>
      </li>
      <li>
        <Link to="/useref">useref</Link>
      </li>
      <li>
        <Link to="/usereducer">usereducer</Link>
      </li>
      <li>
        <Link to="/usecontext">usecontext</Link>
      </li>
      <li>
        <Link to="/table">table</Link>
      </li>
      <li>
        <Link to="/form">Forms</Link>
      </li>
    </ul>
  </nav>

  <Outlet />
  </>
  )
}

export default Layout