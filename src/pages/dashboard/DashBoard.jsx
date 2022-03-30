import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DashboardBooking from '../../components/dashboard/booking/DashboardBooking'
import DashboardHome from '../../components/dashboard/home/DashboardHome'
import DashboardOrder from '../../components/dashboard/order/DashboardOrder'
import DashboardProduct from '../../components/dashboard/product/DashboardProduct'
import SideBar from '../../components/dashboard/SideBar'
import TopNav from '../../components/dashboard/TopNav'
import DashboardUser from '../../components/dashboard/user/DashboardUser'

const DashBoard = (props) => {
  const [dashboard, setDashboard] = useState(1)
  let navigate = useNavigate()
  let info = {}
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
    <div className="bg-slate-100 h-full">
      <TopNav info={props.userInfo} />
      <div className="flex flex-row justify-between">
        <SideBar getDashboard={getDashboard} /> 
        {
          (dashboard === 1) && <DashboardHome info={info} />
        }
        {
          (dashboard === 2) && <DashboardOrder />
        }
        {
          (dashboard === 3) && <DashboardBooking />
        }
        {
          (dashboard === 4) && <DashboardProduct />
        }
        {
          (dashboard === 5) && <DashboardUser />
        }
        {/* {
          (dashboard === 6) && <DashboardHome />
        } */}
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