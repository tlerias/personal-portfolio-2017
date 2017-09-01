import React, { Component } from 'react';
import './Tool.css';

class Tool extends Component {
  render() {
    const { tool } = this.props;

    return (
      <div className="Tool">
        <figure className="Tool-logo-container">
          <img src={`${process.env.PUBLIC_URL}/${tool.url}`} className="Tool-logo"/>
        </figure>
        <div className="Tool-detail">
          <span className="Tool-detail-name">{tool.name}</span>
        </div>
      </div>
    );
  }
}

export default Tool;
