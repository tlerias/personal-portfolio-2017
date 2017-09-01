import React, { Component } from 'react';
import './Section.style.css';

class Section extends Component {
  render() {
    const { title } = this.props;
    
    return (
      <div className="Section">
        <h3>{title}</h3>
      </div>
    );
  }
}

export default Section;
