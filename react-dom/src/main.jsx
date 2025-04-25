import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import './index.css'
import Contact from './components/Contact-us/Contact'
import App from './App'
import Home from './components/Home/Home'
import About from './components/About/About'
import User from './components/User/User'
import Github from './components/Github/Github'
import {RouterProvider,createBrowserRouter, createRoutesFromElements,Route} from 'react-router-dom'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },{
//         path:'about',
//         element:<About/>
//       },{
//         path:'contact',
//         element:<Contact/>
//       },{
//         path:'user/:userid',
//         element:<User/>
//       }
//     ]
//   }
// ])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<Github/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
