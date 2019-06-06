import React from 'react';
import './Tool.css';

const Tool = ({ tool }) => (
  <div className="Tool">
    <div className="Tool-detail">
      <span className="Tool-detail-name">{tool.name}</span>
    </div>
  </div>
);

export default Tool;
