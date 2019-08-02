import React from "react";
import { Container, Card, Image, Icon } from "semantic-ui-react";

export default function NasaCard({ title, url, explanation, date, copyright }) {
  return (
    <Container className="main" centered={true}>
      <Card fluid>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span className="date">{date}</span>
          </Card.Meta>
          <Image src={url} wrapped ui={false} />
          <Card.Description>{explanation}</Card.Description>
        </Card.Content>
        <Card.Content extra textAlign="left">
          <Icon disabled name="copyright" />
          {copyright}
        </Card.Content>
      </Card>
    </Container>
  );
}
