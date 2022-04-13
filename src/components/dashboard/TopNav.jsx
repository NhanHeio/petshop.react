import React, { useState } from 'react';
import logo from '../../assets/image/logo-home.png';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
const style = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 999,
    paddingTop: 0,
    paddingBottom: 0
}
const TopNav = ({ info }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            {
                info &&
                <div style={style} className="flex flex-row justify-between px-20 border-b-2 shadow-sm bg-white">
                    <img className="w-28 -m-4" src={logo} alt="Logo" />
                    <div className="flex flex-row my-auto">
                        <div className="pl-6">
                            <Avatar
                                alt={info.name}
                                src={process.env.REACT_APP_AVATAR + info.img}
                                onClick={handleClick}
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            />
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <Link to={`/profile/${info.id}`}>
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                </Link>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default TopNav