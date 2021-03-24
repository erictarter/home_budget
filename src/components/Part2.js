import React, { useContext, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const Part2 = () => {
  const AppContext = useContext(Context);

  const [incomeInput, setIncomeInput] = useState('');
  const [secondPerson, setSecondPerson] = useState('');
  const [no, setNo] = useState(false);
  const [yes, setYes] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [secondName, setSecondName] = useState('');
  const [secondIncome, setSecondIncome] = useState('');

  const selectedYes = useSpring({
    transform: yes
      ? 'translate3d(0px, 2px, 0px) scale(1.08)'
      : 'translate3d(0px, 0px, 0px) scale(1)',
    background: yes ? 'rgb(118, 223, 255)' : 'rgb(149, 168, 149)'
  });
  const selectedNo = useSpring({
    transform: no
      ? 'translate3d(0px, 2px, 0px) scale(1.08)'
      : 'translate3d(0px, 0px, 0px) scale(1)',
    background: no ? 'rgb(118, 223, 255)' : 'rgb(149, 168, 149)'
  });

  const showMessageAn = useSpring({
    right: showMessage ? '2rem' : '-15rem'
  });

  const step2An = useSpring({
    opacity: AppContext.step2 ? 1 : 0,
    // DISPLAT CHANGE
    display: AppContext.step2 ? 'grid' : 'none'
  });
  const showBtn = useSpring({
    display: AppContext.step2 ? 'block' : 'none'
  });

  const secondPersonAn = useSpring({
    opacity: secondPerson ? 1 : 0
  });

  return (
    <div>
      <animated.div style={step2An} className='part-2'>
        <h2>What is your monthly take home income?</h2>
        <input
          onChange={e => {
            setIncomeInput(e.target.value);
            AppContext.setIncome(parseInt(e.target.value));
            console.log(incomeInput);
          }}
          className='income'
          type='number'
          min='0'
          placeholder='Income'
          value={incomeInput}
        />
        {AppContext.isMarried ? (
          <h2>Will Your Spouse or somone else be on this loan?</h2>
        ) : (
          <h2>Will anyone else be on this loan?</h2>
        )}
        <div className='add-somone'>
          <animated.div
            onClick={() => {
              setSecondPerson(true);
              setYes(true);
              setNo(false);
            }}
            className='add-someone-y'
            style={selectedYes}
          >
            YES
          </animated.div>
          <animated.div
            onClick={() => {
              setSecondPerson(false);
              setNo(true);
              setYes(false);
            }}
            className='add-someone-n'
            style={selectedNo}
          >
            NO
          </animated.div>
        </div>
        <animated.div style={secondPersonAn} className='second-person'>
          <h2>Co-borrower Info</h2>
          <div className='second-person-info'>
            <input
              onChange={e => {
                setSecondName(e.target.value);
              }}
              type='text'
              className='second-name'
              placeholder='Name'
            ></input>
            <div className='split'></div>
            <input
              onChange={e => {
                setSecondIncome(e.target.value);
              }}
              type='number'
              min='0'
              className='second-income'
              placeholder='Income'
            ></input>
          </div>
        </animated.div>
      </animated.div>
      <animated.div style={showMessageAn} className='message'>
        Answer all the questions please..
      </animated.div>
      <animated.div
        style={showBtn}
        onClick={() => {
          if (no && incomeInput !== '') {
            AppContext.setStep2Complete(true);
            AppContext.setStep3(true);
            AppContext.setStep2(false);
          } else if (
            yes &&
            incomeInput !== '' &&
            secondIncome !== '' &&
            secondName !== ''
          ) {
            AppContext.setStep2Complete(true);
            AppContext.setStep3(true);
            AppContext.setStep2(false);
            AppContext.setSecondPerson(true);
            AppContext.setSecondIncome(secondIncome);
            AppContext.setSecondName(
              secondName.charAt(0).toUpperCase() + secondName.slice(1)
            );
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
      </animated.div>
    </div>
  );
};

export default Part2;

// ADD CLICK ANIMATIONS/STATES-BOTH STATS TO Y/N BTNS
