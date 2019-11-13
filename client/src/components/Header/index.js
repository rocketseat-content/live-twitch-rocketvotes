import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container } from './styles';
import Profile from './Profile';
import Login from './Login';

export default function Header() {
  const { signed } = useSelector(state => state.auth);

  return (
    <Container>
      <Link to="/dashboard">
        <img src={logo} alt="Rocketvotes" title="Rocketvotes" />
      </Link>

      {signed ? <Profile /> : <Login />}
    </Container>
  );
}
