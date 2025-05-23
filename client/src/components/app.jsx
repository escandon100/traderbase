import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router'
import Layout from './layout/layout'
import Homepage from './homepage/homepage'
import Terms from '../routes/terms/terms'
import Risks from '../routes/risks/risks'
import Register from '../routes/register/register'
import Login from '../routes/login/login'


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
            path:"/terms",
            element : <Terms/>
          },  
          {
            path:"/risks",
            element:<Risks/>
          },
          {
            path:"/register",
            element:<Register/>
          },
          {
            path:"/login",
            element:<Login/>
          }
         

        ]
      }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
