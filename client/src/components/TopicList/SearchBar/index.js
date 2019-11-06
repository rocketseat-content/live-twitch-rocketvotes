import React, { useState } from 'react';

import { Input } from './styles';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  return (
    <Input
      type="text"
      placeholder="Digite para buscar..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  );
}
