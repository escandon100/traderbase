import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router'
import Layout from './layout/layout'
import Terms from '../routes/terms/terms'
import Risks from '../routes/risks/risks'


const App = () => {

  const router = createBrowserRouter([
      {
        path : "/",
        element : <Layout/>,
        children : [
          {
            path:"/terms",
            element : <Terms/>
          },  
          {
            path:"/risks",
            element:<Risks/>
          }
         

        ]
      }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
