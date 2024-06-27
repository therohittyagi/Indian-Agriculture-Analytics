import React from "react";
import processData from "./data/processData";
import CropMaxMinTable from "./components/CropMaxMinTable";
import CropAverageTable from "./components/CropAverageTable";
import "./css/styles.css";

const App = () => {
  const { maxMinProductionTable, averageYieldAreaTable } = processData();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Indian Agriculture Analytics</h1>
      <hr></hr>
      <h2>Crop Production Data</h2>
      <CropMaxMinTable data={maxMinProductionTable} />
      <hr></hr>
      <h2>Average Yield And Cultivation Area</h2>
      <CropAverageTable data={averageYieldAreaTable} />
    </div>
  );
};

export default App;
