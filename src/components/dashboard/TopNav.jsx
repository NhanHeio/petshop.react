import React from 'react';
import logo from '../../assets/image/logo-home.png';
import { Avatar, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
const style = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 999,
    paddingTop: 0,
    paddingBottom: 0
}
const TopNav = ({info}) => {
    console.log(info)
    return (
        <div>
            <div style={style} className="flex flex-row justify-between px-20 border-b-2 shadow-sm bg-white">
                <img className="w-28 -m-4" src={logo} alt="Logo" />
                <div className="flex flex-row my-auto">
                    <Badge badgeContent={4} color="primary">
                        <NotificationsIcon color="primary" fontSize="large" />
                    </Badge>
                    <div className="pl-6">
                        <Avatar alt="avatar" src='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav