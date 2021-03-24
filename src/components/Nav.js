import React, { useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import { Context } from './context/AppContext';

export const Nav = () => {
  const AppContext = useContext(Context);

  const s1Active = useSpring({
    transform: AppContext.step1 ? 'scale(1.4)' : 'scale(1)',
    color: AppContext.step1 ? 'rgb(21, 221, 184)' : '#ddd'
  });
  const s2Active = useSpring({
    transform: AppContext.step2 ? 'scale(1.4)' : 'scale(1)',
    color: AppContext.step2 ? 'rgb(21, 221, 184)' : '#ddd'
  });
  const s3Active = useSpring({
    transform: AppContext.step3 ? 'scale(1.4)' : 'scale(1)',
    color: AppContext.step3 ? 'rgb(21, 221, 184)' : '#ddd'
  });

  const s4Active = useSpring({
    transform: AppContext.step4 ? 'scale(1.4)' : 'scale(1)',
    color: AppContext.step4 ? 'rgb(21, 221, 184)' : '#ddd'
  });
  const s5Active = useSpring({
    transform: AppContext.step5 ? 'scale(1.4)' : 'scale(1)',
    color: AppContext.step5 ? 'rgb(21, 221, 184)' : '#ddd'
  });

  const ghost1 = useSpring({
    width: AppContext.step1Complete ? '62px' : '0px'
  });
  const ghost2 = useSpring({
    width: AppContext.step2Complete ? '62px' : '0px'
  });
  const ghost3 = useSpring({
    width: AppContext.step3Complete ? '62px' : '0px'
  });
  const ghost4 = useSpring({
    width: AppContext.step4Complete ? '62px' : '0px'
  });
  const ghost5 = useSpring({
    width: AppContext.step5Complete ? '62px' : '0px'
  });

  const navAn = useSpring({
    opacity: AppContext.intro ? 0 : 1
  });

  return (
    <animated.div style={navAn} className='nav'>
      {/* <i
        class='fas fa-home'
        style={{ fontSize: '2.6rem', color: 'tomato' }}
      ></i> */}
      <div className='progress'>
        <div className='dots'>
          {AppContext.step1Complete ? (
            <i class='fas fa-check-circle check'></i>
          ) : (
            <animated.i style={s1Active} class='far fa-circle dot'></animated.i>
          )}
          <div className='line'>
            <animated.div
              style={ghost1}
              className='ghost-line-1'
            ></animated.div>
          </div>
          {AppContext.step2Complete ? (
            <i class='fas fa-check-circle check'></i>
          ) : (
            <animated.i style={s2Active} class='far fa-circle dot'></animated.i>
          )}
          <div className='line'>
            <animated.div
              style={ghost2}
              className='ghost-line-1'
            ></animated.div>
          </div>
          {AppContext.step3Complete ? (
            <i class='fas fa-check-circle check'></i>
          ) : (
            <animated.i style={s3Active} class='far fa-circle dot'></animated.i>
          )}
          <div className='line'>
            <animated.div
              style={ghost3}
              className='ghost-line-1'
            ></animated.div>
          </div>
          {AppContext.step4Complete ? (
            <i class='fas fa-check-circle check'></i>
          ) : (
            <animated.i style={s4Active} class='far fa-circle dot'></animated.i>
          )}
          <div className='line'>
            <animated.div
              style={ghost4}
              className='ghost-line-1'
            ></animated.div>
          </div>
          {AppContext.step5Complete ? (
            <i class='fas fa-check-circle check'></i>
          ) : (
            <animated.i style={s5Active} class='far fa-circle dot'></animated.i>
          )}
          <div className='line'>
            <animated.div
              style={ghost5}
              className='ghost-line-1'
            ></animated.div>
          </div>
          {AppContext.done ? (
            <i class='fas fa-check-circle check'></i>
          ) : (
            <i class='far fa-circle dot'></i>
          )}
        </div>
        <div className='steps'>
          <div className='step'>Personal</div>
          <div className='step'>Income</div>
          <div className='step'>Expenses</div>
          <div className='step'>Credit</div>
          <div className='step'>Down Payment</div>
          <div className='step'>Done</div>
        </div>
      </div>
    </animated.div>
  );
};

export default Nav;
