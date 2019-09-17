import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import DateInput from "../common/DateInput";
import TimeInput from "../common/TimeInput";
import Korty from "../common/Korty";

const SquashForm = ({
  handleOnSzukaj,
  handleDateChange,
  handleStartTimeChange,
  handleEndTimeChange,
  startDate,
  startTime,
  endTime,
  errors
}) => {
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
              error={errors.startDate}
            />
          </Col>
        </Row>
        <Row>
          <Col xs lg="4">
            <TimeInput
              name="od"
              label="Szukaj od:"
              startTime={startTime}
              handleTimeChange={handleStartTimeChange}
              error={errors.sTime}
            />
          </Col>
          <Col xs lg="4">
            <TimeInput
              name="od"
              label="Szukaj do:"
              startTime={endTime}
              handleTimeChange={handleEndTimeChange}
              error={errors.eTime}
            />
          </Col>
        </Row>
        <Row>
          <Col xs lg="4">
            {errors.difference && (
              <div className="alert alert-danger" role="alert">
                {errors.difference}
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Korty />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" type="submit" onClick={handleOnSzukaj}>
              Szukaj
            </Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default SquashForm;
