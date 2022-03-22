import React from 'react'
import SideBar from '../../components/dashboard/SideBar'
import TopNav from '../../components/dashboard/TopNav'

const DashBoard = () => {
  return (
    <div className="bg-slate-100 h-screen">
      <TopNav />
      <SideBar />
    </div>
  )
}

export default DashBoard