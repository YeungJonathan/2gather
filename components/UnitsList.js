import React from "react";
import Unit from "./Unit";

const UnitsList = ({ units }) => {
  return units.map(unit => {
    <Unit unit={unit} />;
  });
};
export default UnitsList;
