import React from 'react';
import './Section.css';

const Section = ({
  icon,
  title,
  backgroundColor,
  children
}) => {
  const style = {
    backgroundColor,
  };

  return (
    <div className="Section" style={style}>
      <h2><i className={`fa ${icon}`} /> {title}</h2>
      {children}
    </div>
  );
}

export default Section;
