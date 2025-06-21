import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router'
import Layout from './layout/layout'
import Homepage from './homepage/homepage'
import Register from '../routes/register/register'
import Login from '../routes/login/login'
import Forex from "../routes/trade/forex/forex"
import Carriers from '../routes/trade/carriers/carriers'
import Futures from '../routes/trade/futures/futures'
import Payment from '../routes/trade/payment/payment'
import Indexes from "../routes/trade/indexes/indexes"
import PasswordReset from '../routes/passwordReset/passwordReset'
import Withdrawal from '../routes/trade/withdrawal/withdrawal'
import Execution from '../routes/trade/execution/execution'
import Spreads from '../routes/trade/spreads/spreads'
import Swaps from '../routes/trade/swaps/swaps'
import Hours from '../routes/trade/hours/hours'
import Webinars from '../routes/education/webinars/webinars'
import Calender from '../routes/education/calender/calender'
import Ebook from '../routes/education/ebook/ebook'
import Advices from '../routes/education/advices/advices'
import About from './navbar/links/about/about'
import Contact from '../routes/about/contact/contact'
import Affiliate from '../routes/about/affiliate/affiliate'
import Regulation from '../routes/about/regulation/regulation'
import Verification from '../routes/about/verification/verification'
import Privacy from '../routes/about/privacy/privacy'
import Safety from '../routes/about/safety/safety'
import Risk from '../routes/about/risk/risk'
import Terms from '../routes/about/terms/terms'
import Information from '../routes/about/information/informatio'
import Conflict from '../routes/about/conflict/conflict'






const App = () => {

  const router = createBrowserRouter([
      {
        path : "/",
        element : <Layout/>,
        children : [
          {
            index : true,
            element : <Homepage/>
          },
          {
            path : "/forex",
            element : <Forex/>

          },
          {
            path : "/futures",
            element : <Futures/>

          },
            {
            path : "/indexes",
            element : <Indexes/>

          },
            {
            path : "/carriers",
            element : <Carriers/>

          },
          {
            path : "/payment",
            element : <Payment/>

          },
          {
            path : "/withdrawal",
            element : <Withdrawal/>
          },
          {
            path : "/execution",
            element : <Execution/>
          },
          {
            path : "/spreads",
            element : <Spreads/>
          },
           {
            path : "/swaps",
            element : <Swaps/>
          },
          {
            path : "/hours",
            element : <Hours/>
          },
          {
            path : "/webinars",
            element : <Webinars/>
          },
          {
            path : "/calender",
            element : <Calender/>
          },
          {
            path : "/ebook",
            element : <Ebook/>
          },
          {
            path : "/advices",
            element : <Advices/>
          },
          {
            path : "/about",
            element : <About/>
          },
          {
            path : "/contact",
            element : <Contact/>
          },
          {
            path : "/affiliate",
            element : <Affiliate/>
          },
          {
            path : "/regulation",
            element : <Regulation/>
          },
          {
            path : "/verification",
            element : <Verification/>
          },
          {
            path : "/privacy",
            element : <Privacy/>
          },
          {
            path : "/safety",
            element : <Safety/>
          },
          {
            path:"/risk",
            element:<Risk/>
          },
          {
            path:"/terms",
            element : <Terms/>
          }, 
          {
            path:"/information",
            element : <Information/>
          }, 
          {
            path:"/conflict",
            element : <Conflict/>
          }
       
       
   
         

        ]
      },
     {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path : "/passwordReset",
        element : <PasswordReset/>
      }
    
  
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
