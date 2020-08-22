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
      .post<ILink>("/", {
        original: originalLink,
      })
      .finally(() => {
        setButtonText("Encurtar");
      });

    if (response.data.hashed) setLink(response.data);
  }

  return (
    <>
      <Container>
        <div className="curved">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,128L60,128C120,128,240,128,360,117.3C480,107,600,85,720,85.3C840,85,960,107,1080,106.7C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
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
    </>
  );
};

export default Home;
