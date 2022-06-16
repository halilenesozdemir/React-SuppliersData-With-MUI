import React from 'react';

const TechButton = props => {
  return <button style={{ color: 'tomato', width: props.width, height: props.height }}>{props.title}</button>;
};

export default TechButton;
