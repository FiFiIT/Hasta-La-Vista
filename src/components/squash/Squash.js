import React, { useState, useRef } from "react";
import SquashForm from "./SquashForm";
import * as squashApi from "./../../api/squashApi";
import SquashSearching from "./SquashSearching";

const Squash = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("18:00");
  const [endTime, setEndTime] = useState("19:00");
  const [errors, setErrors] = useState({});
  const [freeCourts, setFreeCourts] = useState({});
  const [isSearching, setIsSearching] = useState(false);
  const intervalId = useRef();

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

  function validateMinutes(time, name) {
    const minutes = parseInt(time.slice(-2));
    if (minutes !== 0 && minutes !== 30) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: "Minutes needs to be 00 or 30"
      }));
    }
  }

  const formIsValid = () => {
    setErrors({});
    validateMinutes(startTime, "sTime");
    validateMinutes(endTime, "eTime");

    if (startTime >= endTime) {
      setErrors(prevErrors => ({
        ...prevErrors,
        difference: "Start Time must be set before End Time"
      }));
    }

    return Object.keys(errors).length === 0;
  };

  const handleOnSzukaj = event => {
    event.preventDefault();

    if (!formIsValid()) {
      return;
    }

    setIsSearching(true);
    intervalId.current = setInterval(() => searchForFreeCourts(), 5000);
    console.log("New interval started: " + intervalId.current);
  };

  const searchForFreeCourts = () => {
    squashApi
      .getFreeCourts(startDate, startTime, endTime)
      .then(allCourts => {
        console.log("We did it");
        if (allCourts.length > 0) {
          console.log("Clearing interval: " + intervalId.current);
          clearInterval(intervalId.current);
        }
        setFreeCourts(allCourts);
      })
      .catch(error => {
        console.log("Error: " + error);
      });
  };

  return (
    <>
      {isSearching ? (
        <>
          <p>Szukam wolnych kortow...</p>
          {freeCourts.length > 0 && <SquashSearching freeCourts={freeCourts} />}
        </>
      ) : (
        <SquashForm
          handleOnSzukaj={handleOnSzukaj}
          handleDateChange={handleDateChange}
          handleStartTimeChange={handleStartTimeChange}
          handleEndTimeChange={handleEndTimeChange}
          startDate={startDate}
          startTime={startTime}
          endTime={endTime}
          errors={errors}
        />
      )}
    </>
  );
};

export default Squash;
