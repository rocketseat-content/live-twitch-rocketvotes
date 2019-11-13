import React, { useState } from 'react';
import { gql } from 'apollo-boost';

import { Container, Form, TextInput, TextArea, Button } from './styles';

export default function SuggestTopic() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Container>
      <h2>Sugerir um tópico</h2>
      <p>
        Comece a votar e sugerir as melhores ideias para lives do Bootcamp,
        hoje. Sempre verifique se a sua ideia já não foi sugerida antes!
      </p>

      <Form>
        <TextInput
          type="text"
          placeholder="Título"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextArea
          placeholder="Detalhes"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </Form>

      <Button>Cadastrar tópico</Button>
    </Container>
  );
}
