import React, { useState } from "react";
import DisplayTables from "./DisplayTables";
import allCountryScores from "./scores";
import "./App.css";
import WorldHeader from "./WorldHeader";

const App = () => {
  const [sortOrder, setSortOrder] = useState("ascending");

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) =>
      prevSortOrder === "ascending" ? "descending" : "ascending"
    );
  };

  return (
    <>
      <WorldHeader />
      <button onClick={toggleSortOrder}>Toggle Sort Order</button>
      <DisplayTables
        sortOrder={sortOrder}
        allCountryScores={allCountryScores}
      />
    </>
  );
};

export default App;
