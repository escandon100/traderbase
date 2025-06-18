import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router'
import Layout from './layout/layout'
import Homepage from './homepage/homepage'
import Terms from '../routes/terms/terms'
import Risks from '../routes/risks/risks'
import Register from '../routes/register/register'
import Login from '../routes/login/login'
import ForexLink from '../routes/forexlink/forexLink'
import FuturesLink from '../routes/futuresLink/futuresLink'
import IndexesLink from '../routes/indexesLink/indexesLink'
import CarriersLink from '../routes/carriersLink/carriersLink'
import PaymentMethods from '../routes/paymentMethods/paymentMethods'
import PasswordReset from '../routes/passwordReset/passwordReset'


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
            path : "/forexLink",
            element : <ForexLink/>

          },
          {
            path : "/futuresLink",
            element : <FuturesLink/>

          },
            {
            path : "/indexesLink",
            element : <IndexesLink/>

          },
            {
            path : "/carriersLink",
            element : <CarriersLink/>

          },
          {
            path:"/terms",
            element : <Terms/>
          }, 
          {
            path : "/payment",
            element : <PaymentMethods/>

          },
          {
            path:"/risks",
            element:<Risks/>
          },
   
         

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
