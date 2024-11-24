import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./home/HomePage"
import NotFoundPage from "./notFound/NotFoundPage"
import StartPage from "./start/StartPage"
import BotcampsPage from "./bootcamps/BootcampsPage"
import { AuthProvider } from "./context/AuthProvider"
import PrivateRoutes from "./shared/privateRoutes/PrivateRoutes"
import RegisterBootcampPage from "./bootcamps/register/RegisterBootcampPage"
import AboutPage from "./about/AboutPage"
import ListUsersBootcampPage from "./bootcamps/listsUsers/ListUsersBootcampPage"


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/login',
      element: <StartPage/>
    },
    {
      path: '/bootcamps',
      element: <PrivateRoutes/>, 
      children:[ 
        {
          path:'',
          element:<BotcampsPage/>
        },
        {
          path:'register',
          element:<RegisterBootcampPage/>
        },
        {
          path:'listUsers/:name',
          element:<ListUsersBootcampPage/>
        }
      ]
    },
    {
      path: '/about',
      element: <AboutPage/>
    },
    {
      path: '*',
      element: <NotFoundPage/>
    }
  ])

  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
    
  )
}

export default App