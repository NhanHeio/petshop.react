import React, { useState } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { useSnackbar } from 'notistack';
import { handleUpdatePassword } from '../../../services/userService';

const ChangePassword = (props) => {
    const { enqueueSnackbar } = useSnackbar();
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPassword2, setNewPassword2] = useState('')
    const handleClickChangePass = async (oldPassword,newPassword,newPassword2) => {
        let paramsObject = {
            email: props.userInfo.email,
            oldPassword: oldPassword,
            newPassword: newPassword,
            newPassword2: newPassword2
        }
        let params = queryString.stringify(paramsObject)
        let response = await handleUpdatePassword(params)
        if(response.errCode === 0){
            enqueueSnackbar(response.errMessage, {
                variant: 'success',
                autoHideDuration: 3000
              })
        }else{
            enqueueSnackbar(response.errMessage, {
                variant: 'error',
                autoHideDuration: 3000
              })
        }
    }
    return (
        <div className="w-1/3 md:ml-40">
            <h2 className="text-2xl text-slate-600 mb-3">Change Password</h2>
            <div>
                <div className="text-left">
                    <label htmlFor="oldPass" className=" font-normal text-md text-left py-1.5" >Old password: </label>
                    <input
                        type="password"
                        className="block border border-grey-light w-2/3 p-3 rounded mb-4 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        name="oldPass"
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                    />
                </div>
                <div className="text-left">
                    <label htmlFor="newPass" className=" font-normal text-md text-left py-1.5" >New password: </label>
                    <input
                        type="password"
                        className="block border border-grey-light w-2/3 p-3 rounded mb-4 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        name="newPass"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="text-left">
                    <label htmlFor="newPass2" className=" font-normal text-md text-left py-1.5" >Retype new password: </label>
                    <input
                        type="password"
                        className="block border border-grey-light w-2/3 p-3 rounded mb-4 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        name="newPass2"
                        value={newPassword2}
                        onChange={e => setNewPassword2(e.target.value)}
                    />
                </div>
                <button
                    type="button"
                    className=" w-fit px-6 py-2.5 mt-2 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => { handleClickChangePass(oldPassword,newPassword,newPassword2) }}
                >
                    Change Password
                </button>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
      isLoggedIn: state.user.isLoggedIn,
      userInfo: state.user.userInfo
    }
  }
  
  const mapDispatchToProps = () => {
    return {
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChangePassword);