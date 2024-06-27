import React from 'react';
import { Table, useMantineTheme } from '@mantine/core';
import '../css/styles.css';

const CropMaxMinTable = ({ data }) => {
  const theme = useMantineTheme();

  return (
    <div className="table-container">
      <Table highlightOnHover striped>
        <thead style={{ backgroundColor: theme.colors.blue[6] }}>
          <tr>
            <th>Year</th>
            <th>Crop with Maximum Production</th>
            <th>Crop with Minimum Production</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{row.maxProductionCrop}</td>
              <td>{row.minProductionCrop}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CropMaxMinTable;
