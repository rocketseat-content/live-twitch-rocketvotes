import React from 'react';

import { Container, Form, TextInput, TextArea, Button } from './styles';

export default function SuggestTopic() {
  return (
    <Container>
      <h2>Sugerir um tópico</h2>
      <p>Antes de sugerir um tópico, verifique se ele já não existe.</p>

      <Form>
        <TextInput type="text" placeholder="Título" />
        <TextArea placeholder="Detalhes" />
      </Form>

      <Button>Cadastrar tópico</Button>
    </Container>
  );
}
