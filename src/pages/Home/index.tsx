import React, { useState } from "react";

import { Container, Title, Input, Button, ResultContainer } from "./styles";

import api from "../../services/api";

interface ILink {
  id: Number;
  created_at: String;
  updated_at: String;
  original: String;
  hashed: String;
  clicks: Number;
}

const Home: React.FC = () => {
  const [originalLink, setOriginalLink] = useState("");
  const [buttonText, setButtonText] = useState("Encurtar");
  const [link, setLink] = useState<ILink>();

  async function handleSubmit() {
    setButtonText("Encurtando...");

    const response = await api
      .post<ILink>("v1/", {
        original: originalLink,
      })
      .finally(() => {
        setButtonText("Encurtar");
      });

    if (response.data.hashed) setLink(response.data);
  }

  return (
    <Container>
      <Title>Encurtar URL</Title>
      <Input
        id="original_link"
        type="text"
        placeholder="Digite a URL. e.g: https://google.com/"
        value={originalLink}
        onChange={(event) =>
          setOriginalLink(event.target.value.toLocaleLowerCase())
        }
      />
      <Button onClick={handleSubmit}>{buttonText}</Button>
      {link?.hashed && (
        <ResultContainer>
          {process.env.REACT_APP_SHORTENER_DOMAIN}
          {link?.hashed}
        </ResultContainer>
      )}
    </Container>
  );
};

export default Home;
