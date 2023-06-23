import React, { useContext, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { Context } from './context/AppContext'

export const Part5 = () => {
  const AppContext = useContext(Context)

  const [downPayment, setDownPayment] = useState(0)

  const part5An = useSpring({
    opacity: AppContext.step5 ? 1 : 0,
    display: AppContext.step5 ? 'block' : 'none'
  })

  const showBtn = useSpring({
    display: AppContext.step5 ? 'block' : 'none'
  })

  return (
    <div>
      <animated.div style={part5An} className='part-5'>
        <h2>Finally, What would your down payment be?</h2>
        <input
          onChange={(e) => {
            setDownPayment(e.target.value)
          }}
          type='number'
          id='down-payment'
          value={downPayment}
          min='0'
        />
        <animated.div
          onClick={() => {
            AppContext.setDownPayment(downPayment)
            AppContext.setStep5(false)
            AppContext.setLoading(true)
            AppContext.setStep5Complete(true)
            setTimeout(() => {
              AppContext.setLoading(false)
              AppContext.setDone(true)
            }, 2000)
          }}
          style={showBtn}
          className='next-btn'>
          Finish
        </animated.div>
      </animated.div>
    </div>
  )
}

export default Part5
