import React, { useState, useMemo } from 'react';
import queryString from 'query-string';

import { Input } from './styles';

export default function SearchBar({ history }) {
  const query = useMemo(() => queryString.parse(history.location.search), [
    history.location.search,
  ]);

  const [input, setInput] = useState(query.search || '');
  const [task, setTask] = useState(null);

  function handleSearch(text) {
    history.push({
      search: queryString.stringify({
        ...query,
        page: 1,
        search: text,
      }),
    });
  }

  function handleInputChange(text) {
    setInput(text);

    if (task) clearTimeout(task);

    setTask(setTimeout(() => handleSearch(text), 300));
  }

  return (
    <Input
      type="text"
      placeholder="Digite para buscar..."
      value={input}
      onChange={e => handleInputChange(e.target.value)}
    />
  );
}
