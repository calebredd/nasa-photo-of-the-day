import React from "react";
import { Card, Button } from "semantic-ui-react";

const DisplayCard = ({ date, setDate, randomDate }) => {
  return (
    <Card className="display-card" centered={true}>
      <Card.Header className="displaying-date">
        Current date being displayed: {date}
      </Card.Header>
      <Card.Content>
        <Button
          primary
          inverted
          // className="random-btn"
          onClick={() => {
            return setDate(randomDate());
          }}
        >
          {" "}
          Random Picture
        </Button>
      </Card.Content>
    </Card>
  );
};

export default DisplayCard;
