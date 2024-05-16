import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/pages-css/index.css';

//navigator
  import MainNavs from './navs/MainNavs.jsx';

//pages
  import Hero from './pages/Hero.jsx';

//utils
  import NotFound from './utils/NotFound.jsx';

//background
  import BackGround from './bg/BackGround.jsx';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

const single = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainNavs/>}>
      <Route index element={<Hero/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={single}/>
    <BackGround/>
  </React.StrictMode>,
)
