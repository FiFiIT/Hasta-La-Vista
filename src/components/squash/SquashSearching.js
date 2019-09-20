import React from "react";

const SquashSearching = ({ freeCourts }) => {
  return (
    <>
      {freeCourts.map(court => (
        <div key={court.number}>Kort numer {court.number} jest wolny</div>
      ))}
    </>
  );
};

export default SquashSearching;
