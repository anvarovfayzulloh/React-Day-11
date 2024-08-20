import React, { useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import Home from "./home/Home"
import Blog from "./blog/Blog"
import data from '../data/data'

const RouterController = () => {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])
  return useRoutes([
    {
       path: "/",
       element: <Home/>,
    },
    {
        path: "/blog/:id",
        element: <Blog  data={data} />,
    },
  ])
}

export default RouterController