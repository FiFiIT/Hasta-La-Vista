import React, { useState } from "react";
import DateInput from "../common/DateInput";
import TimeInput from "../common/TimeInput";
import Korty from "../common/Korty";
import { Container, Row, Col, Button } from "react-bootstrap";

const Squash = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("18:00");
  const [endTime, setEndTime] = useState("19:00");

  const handleDateChange = date => {
    const today = new Date().setHours(0, 0, 0, 0);

    if (date < today) {
      return;
    }
    setStartDate(date);
  };

  const handleStartTimeChange = time => {
    setStartTime(time);
  };

  const handleEndTimeChange = time => {
    setEndTime(time);
  };

  const formIsValid = () => {
    return 0 === 0;
  };

  const handleOnSzukaj = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleOnSzukaj}>
      <Container>
        <Row>
          <Col>
            <h4>Rezerwacja kortów do Squosha</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <DateInput
              label="Na kiedy:"
              name="rezerwacja"
              startDate={startDate}
              handleDateChange={handleDateChange}
            />
          </Col>
        </Row>
        <Row>
          <Col md="auto">
            <TimeInput
              name="od"
              label="Szukaj od:"
              startTime={startTime}
              handleTimeChange={handleStartTimeChange}
            />
          </Col>
          <Col>
            <TimeInput
              name="od"
              label="Szukaj do:"
              startTime={endTime}
              handleTimeChange={handleEndTimeChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Korty />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" type="submit">
              Szukaj
            </Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default Squash;
