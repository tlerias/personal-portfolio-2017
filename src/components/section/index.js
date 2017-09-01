import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
  render() {
    const {
      title,
      backgroundColor,
      children
    } = this.props;

    const style = {
      backgroundColor,
    };

    return (
      <div className="Section" style={style}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

export default Section;
