import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { Button } from './styles';

export default function Login() {
  return (
    <Button>
      <FaGithub />
      Entrar com GitHub
    </Button>
  );
}
