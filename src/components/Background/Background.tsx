import React from 'react';
import './Background.css';

export const Background = React.memo(function Background() {
  return (
    <>
      <div className="background-effects" aria-hidden="true">
        <div className="glow glow-1" />
      </div>
      <div className="background-effects" aria-hidden="true">
        <div className="glow glow-2" />
      </div>
      <div className="background-effects" aria-hidden="true">
        <div className="glow glow-3" />
      </div>
      <div className="background-effects" aria-hidden="true">
        <div className="glow glow-4" />
      </div>
      <div className="background-effects" aria-hidden="true">
        <div className="glow glow-5" />
      </div>
      <div className="background-effects" aria-hidden="true">
        <div className="glow glow-6" />
      </div>
      <div className="background-effects" aria-hidden="true">
        <div className="glow glow-7" />
      </div>
      <div className="background-effects" aria-hidden="true">
        <div className="glow glow-8" />
      </div>
    </>
  );
});