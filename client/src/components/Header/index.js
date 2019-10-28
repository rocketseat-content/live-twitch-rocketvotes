import React from 'react';

import logo from '../../assets/logo.svg';
import SearchBar from './SearchBar';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Rocketvotes" title="Rocketvotes" />
      <SearchBar />
    </Container>
  );
}
