import React from 'react';
import logo from '../../assets/image/logo-home.png';
import { Avatar } from '@mui/material';
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
    // const [avatar, setAvatar] = useState('')
    // setAvatar('process.env.REACT_APP_AVATAR')
    return (
        <div>
            {
                info &&
                <div style={style} className="flex flex-row justify-between px-20 border-b-2 shadow-sm bg-white">
                    <img className="w-28 -m-4" src={logo} alt="Logo" />
                    <div className="flex flex-row my-auto">
                        <div className="pl-6">
                            <Link to={`/profile/${info.id}`}>
                                <Avatar alt={info.name} src={process.env.REACT_APP_AVATAR + info.img} />
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default TopNav