import React, { useState, useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const LoadingSpinner = () => {
  const AppContext = useContext(Context);

  const loadAn = useSpring({
    display: AppContext.loading ? 'grid' : 'none'
  });

  const spin = useSpring({
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360000000deg)'
    },
    config: { duration: 1000000000 }
  });

  return (
    <animated.div style={loadAn} className='loading'>
      <animated.i style={spin} class='fas fa-spinner spinner'></animated.i>
    </animated.div>
  );
};

export default LoadingSpinner;
