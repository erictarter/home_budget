import React, { useContext, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const Part1 = () => {
  const AppContext = useContext(Context);

  const part1An = useSpring({
    opacity: AppContext.step1 ? 1 : 0,
    display: AppContext.step1 ? 'block' : 'none'
  });

  const [marriedSelected, setMarriedSelected] = useState(false);
  const [singleSelected, setSingleSelected] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [name, setName] = useState('');

  const marriedAn = useSpring({
    opacity: marriedSelected ? 1 : 0
  });
  const singleAn = useSpring({
    opacity: singleSelected ? 1 : 0
  });
  const singleBorder = useSpring({
    borderColor: singleSelected ? 'rgb(155, 221, 155)' : '#ddd'
  });
  const marriedBorder = useSpring({
    borderColor: marriedSelected ? 'rgb(155, 221, 155)' : '#ddd'
  });

  const showMessageAn = useSpring({
    right: showMessage ? '2rem' : '-15rem'
  });

  return (
    <animated.div style={part1An} className='part-1-container'>
      <div className='part-1'>
        <h3>Personal Information</h3>
        <input
          onChange={e => {
            setName(e.target.value);
          }}
          type='text'
          className='name'
          placeholder='Enter Your Name...'
        />
        <div className='status'>
          <h4>Marital Status</h4>
          <div className='status-choice'>
            <animated.button
              onClick={() => {
                setMarriedSelected(true);
                setSingleSelected(false);
              }}
              style={marriedBorder}
              className='married'
            >
              Married
              <animated.i
                style={marriedAn}
                className='fas fa-check check'
              ></animated.i>
            </animated.button>
            <animated.button
              onClick={() => {
                setMarriedSelected(false);
                setSingleSelected(true);
              }}
              style={singleBorder}
              className='single'
            >
              Single
              <animated.i
                style={singleAn}
                className='fas fa-check check'
              ></animated.i>
            </animated.button>
          </div>
        </div>
      </div>
      <animated.div style={showMessageAn} className='message'>
        Answer all the questions please..
      </animated.div>
      <div
        onClick={() => {
          if ((name !== '' && marriedSelected) || singleSelected) {
            AppContext.setStep1(false);
            AppContext.setStep1Complete(true);
            AppContext.setStep2(true);
            AppContext.setName(name.charAt(0).toUpperCase() + name.slice(1));
            marriedSelected
              ? AppContext.setIsMarried(true)
              : AppContext.setIsMarried(false);
            // GO TO NEXT STEP
          } else {
            setShowMessage(true);
            setTimeout(() => {
              setShowMessage(false);
            }, 2400);
          }
        }}
        className='next-btn'
      >
        Continue
      </div>
    </animated.div>
  );
};

export default Part1;
