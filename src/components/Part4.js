import React, { useContext, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { Context } from './context/AppContext'

export const Part4 = () => {
  const AppContext = useContext(Context)

  const [score, setScore] = useState(600)
  const [secondaryScore, setSecondaryScore] = useState(600)

  const [showMessage, setShowMessage] = useState(false)

  const part4An = useSpring({
    opacity: AppContext.step4 ? 1 : 0,
    display: AppContext.step4 ? 'block' : 'none'
  })
  const showBtn = useSpring({
    display: AppContext.step4 ? 'block' : 'none'
  })

  const showMessageAn = useSpring({
    right: showMessage ? '2rem' : '-15rem'
  })

  return (
    <div>
      {AppContext.secondPerson ? (
        <animated.div style={part4An} className='part-4'>
          <h2>What are your Credit Scores?</h2>
          <h2 style={{ fontSize: '1rem' }}>
            You may not qualify for a loan if your score is under 600
          </h2>
          <div className='reference'>
            <div className='ref-score'>
              <p>Poor</p>
              <p>300-579</p>
              <div className='poor-color'></div>
            </div>
            <div className='ref-score'>
              <p>Fair</p>
              <p>580-669</p>
              <div className='fair-color'></div>
            </div>
            <div className='ref-score'>
              <p>Good</p>
              <p>670-739</p>
              <div className='good-color'></div>
            </div>
            <div className='ref-score'>
              <p>Great</p>
              <p>740-799</p>
              <div className='great-color'></div>
            </div>
            <div className='ref-score'>
              <p>Excellent</p>
              <p>800-850</p>
              <div className='excellent-color'></div>
            </div>
          </div>
          <label htmlFor='your-score'>{AppContext.name}'s Credit Score</label>
          <br />
          <input
            onChange={(e) => {
              setScore(e.target.value)
            }}
            type='number'
            id='your-score'
            min='300'
            max='850'
            value={score}
            style={{ marginBottom: '1.5rem' }}
          />
          <br />
          <label htmlFor='secondary-score'>
            {AppContext.secondName}'s' Credit Score
          </label>
          <br />
          <input
            onChange={(e) => {
              setSecondaryScore(e.target.value)
            }}
            type='number'
            id='secondary-score'
            min='300'
            max='850'
            value={secondaryScore}
          />
        </animated.div>
      ) : (
        <animated.div style={part4An} className='part-4'>
          <h2>What is your Credit Score?</h2>
          <h2 style={{ fontSize: '1rem' }}>
            You may not qualify for a loan if your score is under 600
          </h2>

          <div className='reference'>
            <div className='ref-score'>
              <p>Poor</p>
              <p>300-579</p>
              <div className='poor-color'></div>
            </div>
            <div className='ref-score'>
              <p>Fair</p>
              <p>580-669</p>
              <div className='fair-color'></div>
            </div>
            <div className='ref-score'>
              <p>Good</p>
              <p>670-739</p>
              <div className='good-color'></div>
            </div>
            <div className='ref-score'>
              <p>Great</p>
              <p>740-799</p>
              <div className='great-color'></div>
            </div>
            <div className='ref-score'>
              <p>Excellent</p>
              <p>800-850</p>
              <div className='excellent-color'></div>
            </div>
          </div>
          <label htmlFor='your-score'>{AppContext.name}'s Credit Score</label>
          <br />
          <input
            onChange={(e) => {
              setScore(e.target.value)
            }}
            type='number'
            id='your-score'
            min='300'
            max='850'
            value={score}
            style={{ marginBottom: '1.5rem' }}
          />
          <animated.div
            onClick={() => {
              // WRITE CONDITIONAL SO SCORES ARE WITH 300-850
              // SHOW MESSAGE IF NOT

              if (AppContext.secondPerson) {
                if (
                  parseInt(score) > 299 &&
                  (parseInt(score) < 851) & (parseInt(secondaryScore) > 299) &&
                  parseInt(secondaryScore) < 851
                ) {
                  AppContext.setCreditScore(
                    (parseInt(score) + parseInt(secondaryScore)) / 2
                  )
                  AppContext.setStep5(true)
                  AppContext.setStep4Complete(true)
                  AppContext.setStep4(false)
                } else {
                  setShowMessage(true)
                  setTimeout(() => {
                    setShowMessage(false)
                  }, 2400)
                }
              } else {
                if (parseInt(score) > 299 && parseInt(score) < 851) {
                  AppContext.setCreditScore(parseInt(score))
                  AppContext.setStep5(true)
                  AppContext.setStep4Complete(true)
                  AppContext.setStep4(false)
                  console.log(AppContext.creditScore)
                } else {
                  setShowMessage(true)
                  setTimeout(() => {
                    setShowMessage(false)
                  }, 2400)
                }
              }
            }}
            style={showBtn}
            className='next-btn'>
            Continue
          </animated.div>
        </animated.div>
      )}
      <animated.div style={showMessageAn} className='message'>
        Score should be between 300-850..
      </animated.div>
    </div>
  )
}

export default Part4
