import React, { Component } from 'react';
import './Framework.css';

class Framework extends Component {
  render() {
    const { framework } = this.props;

    return (
      <div className="Framework">
        <figure className="Framework-logo-container">
          <img src={`${process.env.PUBLIC_URL}/${framework.url}`} className="Framework-logo"/>
        </figure>
        <div className="Framework-detail">
          <span className="Framework-detail-name">{framework.name}</span>
          <div className="Framework-detail-exp">{framework.experience}</div>
        </div>
      </div>
    );
  }
}

export default Framework;
