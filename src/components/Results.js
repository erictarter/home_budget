import React, { useContext, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { Context } from './context/AppContext'

export const Results = () => {
  const AppContext = useContext(Context)
  let cred = AppContext.creditScore

  let nfObject = new Intl.NumberFormat('en-US')

  let base
  let base2

  let rate
  let rate2

  let available =
    parseInt(AppContext.income) +
    parseInt(AppContext.secondIncome) -
    parseInt(AppContext.expenses)

  if (cred < 640) {
    rate2 = 2.49
    base2 = 133
  }
  if (cred > 639 && cred < 660) {
    rate2 = 2.49
    base2 = 133
  }
  if (cred > 659 && cred < 851) {
    rate2 = 1.88
    base2 = 138
  }

  if (cred < 640) {
    rate = 4.35
    base = 172
  }
  if (cred > 639 && cred < 660) {
    rate = 3.75
    base = 181
  }
  if (cred > 659 && cred < 680) {
    rate = 3.35
    base = 193.5
  }
  if (cred > 679 && cred < 700) {
    rate = 3.15
  }
  if (cred > 699 && cred < 760) {
    rate = 2.95
    base = 198
  }
  if (cred > 759 && cred < 851) {
    rate = 2.72
    base = 203
  }

  const resultsAn = useSpring({
    opacity: AppContext.done ? 1 : 0,
    display: AppContext.done ? 'block' : 'none'
  })

  const showBtn = useSpring({
    display: AppContext.done ? 'block' : 'none'
  })

  return (
    <div>
      <animated.div style={resultsAn} className='results'>
        {/* {AppContext.income}
        <br />
        {AppContext.secondIncome}
        <br />
        {AppContext.expenses}
        <br />
        {AppContext.creditScore}
        <br />
        {AppContext.downPayment} */}
        <div className='results-container'>
          <h2>Results</h2>
          <div className='thirty-year'>
            <h3 className='thirty-head'>30-Year</h3>
            <div className='home-value'>
              <h3>Home Amount</h3>
              <h4>
                {nfObject.format(
                  base * (available * 0.36) + parseInt(AppContext.downPayment)
                )}
              </h4>
            </div>
            <div className='int-rate'>
              <h3>Interest Rate</h3>
              <h4>{rate}%</h4>
            </div>
            <div className='monthly'>
              <h3>Monthly Payment</h3>
              <h4>${(available * 0.36).toFixed(2)}</h4>
            </div>
          </div>
          <div className='fifteen-year'>
            <h3 className='fifteen-head'>15-year</h3>
            <div className='home-value'>
              <h3>Home Amount</h3>
              <h4>
                {nfObject.format(
                  base2 * (available * 0.36) + parseInt(AppContext.downPayment)
                )}
              </h4>
            </div>
            <div className='int-rate'>
              <h3>Interest Rate</h3>
              <h4>{rate2}%</h4>
            </div>
            <div className='monthly'>
              <h3>Monthly Payment</h3>
              <h4>${(available * 0.36).toFixed(2)}</h4>
            </div>
          </div>
          <animated.div
            onClick={() => {
              window.location.reload()
            }}
            style={showBtn}
            className='start-over-btn'>
            Start Over
          </animated.div>
        </div>
      </animated.div>
    </div>
  )
}

export default Results
