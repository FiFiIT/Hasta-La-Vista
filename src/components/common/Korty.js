import React from "react";
import Kort from "./Kort";
import { allKorts } from "../../data/allCouts";

const Korty = ({ quantity }) => {
  const tab = allKorts;

  return (
    <div className="form-group">
      <label htmlFor={tab[0]}>Które korty wykluczyć?</label>
      <div className="field">
        {tab.map(n => (
          <Kort {...n} />
        ))}
      </div>
    </div>
  );
};

export default Korty;
