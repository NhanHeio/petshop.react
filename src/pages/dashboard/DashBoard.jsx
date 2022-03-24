import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DashboardHome from '../../components/dashboard/home/DashboardHome'
import SideBar from '../../components/dashboard/SideBar'
import TopNav from '../../components/dashboard/TopNav'

const DashBoard = (props) => {
  const [dashboard, setDashboard] = useState(1)
  let navigate = useNavigate()
  const checkAdminLogin = () => {
    if (!props.isLoggedIn) {
      return navigate("/signin")
    }
    if (props.userInfo.role_id === 1 || props.userInfo.role_id === 2) {
      return
    } else {
      return navigate("/")
    }
  }
  const getDashboard = (id) => {
    setDashboard(id)
  }
  useEffect(() => {
    checkAdminLogin()
  }, [props.isLoggedIn])
  return (
    <div className="bg-slate-100 h-screen">
      <TopNav />
      <div className="flex flex-row justify-between">
        <SideBar getDashboard={getDashboard} /> 
        {
          (dashboard === 1) && <DashboardHome />
        }
        {
          (dashboard === 2) && <DashboardHome />
        }
        {
          (dashboard === 3) && <DashboardHome />
        }
        {
          (dashboard === 4) && <DashboardHome />
        }
        {
          (dashboard === 5) && <DashboardHome />
        }
        {
          (dashboard === 6) && <DashboardHome />
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);