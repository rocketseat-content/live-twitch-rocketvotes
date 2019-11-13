import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../../store/modules/auth/actions';

import { Container, SignOut } from './styles';

export default function Profile() {
  const { name, avatarUrl } = useSelector(state => state.user);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <div>
        <strong>{name}</strong>
        <SignOut onClick={handleSignOut}>Sign out</SignOut>
      </div>
      <img
        src={
          avatarUrl ||
          'https://api.adorable.io/avatars/50/rocketseat@adorable.png'
        }
        alt={name || 'Rocketseat'}
      />
    </Container>
  );
}
