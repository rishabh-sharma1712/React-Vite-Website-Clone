import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './components/Home/Home';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import User from './components/User/User.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children:[
//       {
//         path:"" ,
//         element : <Home></Home>
//       },
//       {
//         path:'about',
//         element :<About />
//       },
//       {
//         path:'contact' ,
//         element:<Contact />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />}/>
      {/* <Route path='' element={<Home />}/> */}
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
