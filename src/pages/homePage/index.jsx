// src/PivotTableComponent.js
import React, { useState } from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import sampleData from '../sampleData';

const PivotTableComponent = () => {
  const [state, setState] = useState({
    data: sampleData,
    rows: ['date'],
    cols: ['category'],
    vals: ['value'],
    aggregatorName: 'Sum',
  });

  return (
    <div>
      <PivotTableUI
        data={state.data}
        onChange={(s) => setState(s)}
        {...state}
      />
    </div>
  );
};

export default PivotTableComponent;
