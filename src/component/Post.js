import { Avatar } from '@material-ui/core';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import React from 'react';
import "../css/Post.css";
import Modal from "react-modal";
function Post(  {id, question, timestamp, queryUser}
      ) {

        
    return (
        <div className="post">
            <div className="post_info">
            <Avatar
            src = {queryUser.photo}
            />
            <h5>{queryUser.displayName?queryUser.displayName:queryUser.email}</h5>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            </div>
            <div className="post_body">
                <div className="post_question">
                <p>{question}</p>
                <button className="post_btnAnswer">Answer</button>
                </div>
                <div className = "post_answer">
                    <p></p>
                </div>
                
                <img src =""
                      alt="" />
            </div>
            <div className="post_footer">
                <ChatBubbleOutlineOutlinedIcon />
                <div className="post_footerLeft">
                    <ShareOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Post;
