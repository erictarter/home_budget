import React, { useContext, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const Part3 = () => {
  const AppContext = useContext(Context);

  const [car, setCar] = useState(0);
  const [student, setStudent] = useState(0);
  const [other, setOther] = useState(0);
  const [card, setCard] = useState(0);

  const step3An = useSpring({
    opacity: AppContext.step3 ? 1 : 0,
    display: AppContext.step3 ? 'block' : 'none'
  });

  const showBtn = useSpring({
    display: AppContext.step3 ? 'block' : 'none'
  });

  return (
    <div>
      <animated.div style={step3An} class='part-3'>
        <h2>Do you have any Monthly Expenses?</h2>
        <h3>Enter any that apply</h3>
        <div className='expenses'>
          <div className='expense'>
            <label htmlFor='car'>Car Payment</label>
            <br />
            <input
              onChange={e => {
                setCar(e.target.value);
              }}
              type='number'
              min='0'
              id='car'
              className='car'
              value={car}
              placeholder='$0'
            />
          </div>
          <div className='expense'>
            <label htmlFor='student'>Student Loans</label>
            <br />
            <input
              onChange={e => {
                setStudent(e.target.value);
              }}
              type='number'
              min='0'
              id='student'
              className='car'
              value={student}
              placeholder='$0'
            />
          </div>
          <div className='expense'>
            <label htmlFor='cc-expense'>Credit Card </label>
            <br />
            <input
              onChange={e => {
                setCard(e.target.value);
              }}
              type='number'
              min='0'
              id='cc-expense'
              className='cc-expense'
              value={card}
              placeholder='$0'
            />
          </div>
          <div className='expense'>
            <label htmlFor='cc-expense'>Other Expenses</label>
            <br />
            <input
              onChange={e => {
                setOther(e.target.value);
              }}
              type='number'
              min='0'
              id='cc-expense'
              className='cc-expense'
              value={other}
              placeholder='$0'
            />
          </div>
        </div>
      </animated.div>
      <animated.div
        onClick={() => {
          AppContext.setExpenses(
            parseInt(car) + parseInt(card) + parseInt(student) + parseInt(other)
          );
          AppContext.setStep3(false);
          AppContext.setStep3Complete(true);
          AppContext.setStep4(true);
        }}
        style={showBtn}
        className='next-btn'
      >
        Continue
      </animated.div>
    </div>
  );
};
export default Part3;
