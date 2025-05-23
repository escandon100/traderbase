import React from 'react'
import Reason1 from '../reason1/reason1'
import Plans from '../plans/plans'
import Reason2 from '../reason2/reason2'
import "./homepage.scss"
import GlobalMarkets from '../globalMarkets/globalMarkets'

const Homepage = () => {
  return (
    <div className='homepage'>
        <Reason1/>
        <Plans/>
        <GlobalMarkets/>
        <Reason2 />
      
    </div>
  )
}

export default Homepage
