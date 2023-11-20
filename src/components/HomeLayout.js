import { Outlet } from "react-router-dom";
import React from 'react'
import HomeHeader from "./HomeHeader";

const HomeLayout = () => {
  return (
    <div className='home_layout'>
        <HomeHeader />
        <div className='home_container'>
            <Outlet />
        </div>
    </div>
  )
}

export default HomeLayout