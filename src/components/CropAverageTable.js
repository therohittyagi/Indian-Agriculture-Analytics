import React from "react";
import { Table, useMantineTheme } from "@mantine/core";
import "../css/styles.css";

const CropAverageTable = ({ data }) => {
  const theme = useMantineTheme();

  return (
    <div className="table-container">
      <Table highlightOnHover striped>
        <thead style={{ backgroundColor: theme.colors.green[6] }}>
          <tr>
            <th>Crop</th>
            <th>Average Yield (1950-2020)</th>
            <th>Average Cultivation Area (1950-2020)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.crop}>
              <td>{row.crop}</td>
              <td>{row.averageYield}</td>
              <td>{row.averageArea}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CropAverageTable;
