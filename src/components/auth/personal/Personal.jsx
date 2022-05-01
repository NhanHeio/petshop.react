import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSnackbar } from 'notistack';
import queryString from 'query-string';
import PersonalNav from './PersonalNav'
import UserDetails from './UserDetails'
import { handleUpdateInfo } from '../../../services/userService'
import { actions } from '../../../store/actions';
import ChangePassword from './ChangePassword';
import BookingHistory from './BookingHistory';
import OrderHistory from './OrderHistory';
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { useNavigate } from 'react-router-dom';

const Personal = (props) => {
  let navigate = useNavigate()
  const checkUserLogin = () => {
    if (!props.isLoggedIn) {
      return navigate("/signin")
    }
    return
  }

  const [active, setActive] = useState(1)
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    img: ''
  })
  const [load, setLoad] = useState(true)
  const { enqueueSnackbar } = useSnackbar();

  const getActiveIndex = (id) => {
    setActive(id)
  }

  const fetchUserInfo = () => {
    if (props.isLoggedIn) {
      setInfo({
        name: props.userInfo.name,
        email: props.userInfo.email,
        phoneNumber: props.userInfo.phone_number,
        address: props.userInfo.address,
        img: props.userInfo.img
      })
    }
    setLoad(false)
  }
  const getInfo = (info) => {
    setInfo(info)
  }
  const updateInfo = async (info) => {
    let params = queryString.stringify(info)
    let response = await handleUpdateInfo(params)
    if (response.errCode === 0) {
      props.userUpdateSuccess(response.user)
      enqueueSnackbar(response.errMessage, {
        variant: 'success',
        autoHideDuration: 3000
      })
    } else {
      enqueueSnackbar(response.errMessage, {
        variant: 'error',
        autoHideDuration: 3000
      })
    }
  }
  useEffect(() => {
    checkUserLogin()
    fetchUserInfo()
  }, [load,props.isLoggedIn])
  return (<>
  <Header />
    <div className="bg-slate-50 py-40">

      <div className="flex flex-row">
        <PersonalNav getActiveIndex={getActiveIndex} />
        {
          (active === 1) &&
          <UserDetails info={info} getInfo={getInfo} updateInfo={updateInfo} />
        }
        {
          (active === 2) &&
          <ChangePassword />
        }
        {
          (active === 3) &&
          <BookingHistory />
        }
        {
          (active === 4) &&
          <OrderHistory />
        }
      </div>
    </div>
    <Footer />
  </>
  )
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userUpdateSuccess: (userInfo) => dispatch(actions.userUpdateSuccess(userInfo)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Personal);