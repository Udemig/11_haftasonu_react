import React from 'react';

const Loader = () => {
  return (
    <div data-testid="loader" className="flex justify-center my-20">
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Loader;
