import { createBrowserRouter } from 'react-router-dom'
import AuthRoute from '../components/AuthRoute'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

export const router = createBrowserRouter([
   {
      path: '/',
      element: <AuthRoute children={<Home />} />,
   },
   {
      path: '/login',
      element: <Login />,
   },
   {
      path: '/register',
      element: <Register />,
   },
])
