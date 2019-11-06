import React from 'react';

import { Container, Form, TextInput, TextArea, Button } from './styles';

export default function SuggestTopic() {
  return (
    <>
      <Container>
        <h2>Sugerir um tópico</h2>
        <p>
          Comece a votar e sugerir as melhores ideias para lives do Bootcamp,
          hoje. Sempre verifique se a sua ideia já não foi sugerida antes!
        </p>

        <Form>
          <TextInput type="text" placeholder="Título" />
          <TextArea placeholder="Detalhes" />
        </Form>

        <Button>Cadastrar tópico</Button>
      </Container>
    </>
  );
}
