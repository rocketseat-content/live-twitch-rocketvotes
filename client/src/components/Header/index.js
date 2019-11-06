import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container } from './styles';
import Login from './Login';

export default function Header() {
  return (
    <Container>
      <Link to="/dashboard">
        <img src={logo} alt="Rocketvotes" title="Rocketvotes" />
      </Link>
      <Login />
    </Container>
  );
}
