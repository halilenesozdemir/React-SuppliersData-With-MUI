import React from 'react';

const PropClickEventSample = props => {
  return (
    <>
      <button onClick={() => props.hello()}> Hello Props</button>
    </>
  );
};

export default PropClickEventSample;
