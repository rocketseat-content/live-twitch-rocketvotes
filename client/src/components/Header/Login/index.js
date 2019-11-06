import React from 'react';
import { FaGithub } from 'react-icons/fa';

import { Button } from './styles';

const redirectURL = `${process.env.REACT_APP_APP_URL}/github/callback`;

export default function Login() {
  return (
    <Button
      href={`${process.env.REACT_APP_GITHUB_AUTH_URL}/authorize?scope=user:email&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${redirectURL}`}
      rel="noopener noreferrer"
    >
      <FaGithub />
      Entrar com GitHub
    </Button>
  );
}
