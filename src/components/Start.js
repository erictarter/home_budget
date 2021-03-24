import React, { useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const Start = () => {
  const AppContext = useContext(Context);

  const startAn = useSpring({
    opacity: AppContext.intro ? 1 : 0,
    display: AppContext.intro ? 'flex' : 'none'
  });

  return (
    <animated.div style={startAn} className='start'>
      <h2>Find out how much house you can afford</h2>
      <button
        onClick={() => {
          AppContext.setIntro(false);
          AppContext.setStep1(true);
        }}
      >
        Start
      </button>
    </animated.div>
  );
};

export default Start;
