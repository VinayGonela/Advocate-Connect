import { Avatar } from '@material-ui/core';
import React from 'react';
import "../css/QueryBox.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


function QueryBox() {
    const user = useSelector(selectUser)
    return (
        <div className= 'queryBox'>
            <div className='queryBox_info'>
                <Avatar src={user.photo}/>
                <h5>{user.displayName ? user.displayName : user.email}</h5>
            </div>
            <div className="queryBox_query">
                    <p>Enter Your Issue or Query here...</p>
            </div>
        </div>
    )
}

export default QueryBox
