import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router'
import Layout from './layout/layout'
import Homepage from './homepage/homepage'
import Register from '../routes/register/register'
import UserLogin from '../routes/userLogin/userLogin'
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
import CalendarPage from '../routes/education/calendar/calendar'
import Ebook from '../routes/education/ebook/ebook'
import Advices from '../routes/education/advices/advices'
import AboutPage from '../routes/about/about/aboutPage'
import Contact from '../routes/about/contact/contact'
import Affiliate from '../routes/about/affiliate/affiliate'
import Regulation from '../routes/about/regulation/regulation'
import Verification from '../routes/about/verification/verification'
import Privacy from '../routes/about/privacy/privacy'
import Safety from '../routes/about/safety/safety'
import Risk from '../routes/about/risk/risk'
import Terms from '../routes/about/terms/terms'
import Information from '../routes/about/information/information'
import Conflict from '../routes/about/conflict/conflict'
import AdminLogin from '../routes/adminLogin/adminLogin'
import AdminDashboard from '../routes/adminDashboard/adminDashboard'
import UserDashboard from '../routes/userDashboard/userDashboard'






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
            path : "/calendar",
            element : <CalendarPage/>
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
            element : <AboutPage/>
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
        path:"/userLogin",
        element:<UserLogin/>
      },
      {
        path : "/passwordReset",
        element : <PasswordReset/>
      },
      {
        path : "/adminLogin",
        element : <AdminLogin/>
      },
      {
        path : "/adminDashboard",
        element : <AdminDashboard/>
      },
      {
        path : "/userDashboard",
        element : <UserDashboard/>

      }
    
  
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
