import React, { Component } from 'react';
import { Link} from "react-router-dom";


const Header = () => (
  <div>
    <h1>Header</h1>
    <Link to="/">
      <a>Home</a>
    </Link> - 
    <Link to="/about">
      <a>About</a>
    </Link>
  </div>
);

export default Header;