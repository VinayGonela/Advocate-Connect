
import { Avatar,Button } from '@material-ui/core';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import React, {useEffect, useState} from 'react';
import "../css/Post.css";
import Modal from "react-modal";
import {setQuestionInfo, selectQuestionId,selectQuestionName} from "../features/questionSlice";
import {selectUser} from "../features/userSlice"
import { useDispatch, useSelector } from "react-redux";
import db from '../firebase';
import firebase from 'firebase'





function Post(  {Id, question, timestamp, queryUser}
      ) {

        const user = useSelector(selectUser)
        const [openModal, setOpenModal] = useState(false)
        const dispatch = useDispatch()

        const questionId = useSelector(selectQuestionId);
        const questionName = useSelector(selectQuestionName)
        const [answer, setAnswer] = useState("")
        const [getAnswer,setGetAnswer] = useState([]);

        const [openIsModal, setIsOpenModal] = useState(false)
        const [bid, setBid] = useState("")
        const [getBid,setGetBid] = useState([]);
        

        useEffect(() => {
            if (questionId) {
              db.collection("questions")
                .doc(questionId)
                .collection("answer")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) =>
                  setGetAnswer(
                    snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
                  )
                );
            }
          }, [questionId]);

          const handleAnswer = (e) => {
            e.preventDefault();
        
            if (questionId) {
              db.collection("questions").doc(questionId).collection("answer").add({
                user: user,
                answer: answer,
                questionId: questionId,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              });
            }
            console.log(questionId);
            setAnswer("");
            setOpenModal(false);
          };
          
           useEffect(() => {
            if (questionId) {
              db.collection("questions")
                .doc(questionId)
                .collection("bid")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) =>
                setGetBid(
                    snapshot.docs.map((doc) => ({ id: doc.id, bids: doc.data() }))
                  )
                );
            }
          }, [questionId]);

          const handleBid = (e) => {
            e.preventDefault();
        
            if (questionId) {
              db.collection("questions").doc(questionId).collection("bid").add({
                user: user,
                bid: bid,
                questionId: questionId,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              });
            }
            console.log(questionId);
            setBid("");
            setIsOpenModal(false);
          }; 
          
    return (
        <div className="post"
            onClick= {()=> dispatch(setQuestionInfo({
                questionId:Id,
                questionName: question
             } ))}
        >

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
                <button onClick = {() => setOpenModal(true)} 
                className="post_btnAnswer">Answer</button>

                <Modal
                            isOpen = {openModal}
                            onRequestClose = {() => setOpenModal(false)}
                            shouldCloseOnOverlayClick={false}
                            style = {{
                                overlay:{
                                width:700,
                                height:500,
                                backgroundColor:"rgba(0,0,0,8)",
                                zIndex: "1000",
                                top:"55%",
                                left:"45%",
                                marginTop: "-300px",
                                marginLeft:"-350px"
                            },
                                 }}
                        >
                            <div className = "modal_question">
                                <h1>{question}</h1>
                                <p>
                                    asked by{" "} <span className = "name">{queryUser.displayName ? queryUser.displayName: queryUser.email} </span>
                                    {""}
                                    on {" "}<span className = "name">{new Date (timestamp?.toDate()).toLocaleString()}</span>
                                    </p>
                                    </div>

                                <div className = "modal_answer">
                                    <textarea
                                    required
                                    value = {answer}
                                    onChange={(e)=> setAnswer(e.target.value)}
                                    placeholder = "Enter Your Answer..." type ="text"/>
                                </div>

                                <div className = "modal_button">
                                <Button className = "cancel"onClick= {()=> setOpenModal(false)}>Close</Button>
                                <Button 
                                onClick = {handleAnswer} 
                                type = "submit" className= "add">Add Answer</Button>
                                </div>
                                
                           
                        </Modal>
                    
                </div>
                <div className = "post_answer">
                    {
                        getAnswer.map(({id, answers}) =>(
                            <p
                            key = {id}
                            style = {{position: "relative",
                            paddingBottom:"5px"}}>
                            {
                                Id === answers.questionId ? (
                                <span>
                                    {answers.answer}
                                
                                <br/>
                                <span
                                    style = {{
                                        position: "absolute",
                                        color: "grey",
                                        fontSize:"small",
                                        display:"flex",
                                        right: "0px"
                                    }}
                                >
                                            <span style = {{color:"#b92b27"}}>
                                                {answers.user.displayName
                                                ? answers.user.displayName
                                                :answers.user.email }  {" "}
                                                on  {" "}
                                                {new Date(answers.timestamp?.toDate()).toLocaleDateString()}
                                            </span>
                                            </span>
                                </span>
                                
                            )  : (
                                ""
                            )}
                            </p>
                        ))}
                </div>
                
                <img src =""
                      alt="" />
            </div>
            <div className="post_footer">
                <ChatBubbleOutlineOutlinedIcon 
                 onClick = {() => setIsOpenModal(true)} 
                 className="post_btnBid"
                />
                <Modal
                            isOpen = {openIsModal}
                            onRequestClose = {() => setIsOpenModal(false)}
                            shouldCloseOnOverlayClick={false}
                            style = {{
                                overlay:{
                                width:700,
                                height:500,
                                backgroundColor:"rgba(0,0,0,8)",
                                zIndex: "1000",
                                top:"55%",
                                left:"45%",
                                marginTop: "-300px",
                                marginLeft:"-350px"
                            },
                                 }}
                        >
                            <div className = "modal_question">
                                <h1>{question}</h1>
                                <p>
                                    asked by{" "} <span className = "name">{queryUser.displayName ? queryUser.displayName: queryUser.email} </span>
                                    {""}
                                    on {" "}<span className = "name">{new Date (timestamp?.toDate()).toLocaleString()}</span>
                                    </p>
                                    </div>

                                <div className = "modal_bid">
                                    <textarea
                                    required
                                    value = {bid}
                                    onChange={(e)=> setBid(e.target.value)}
                                    placeholder = "Enter Your Bid..." type ="text"/>
                                </div>

                                <div className = "modal_button">
                                <Button className = "cancel"onClick= {()=> setIsOpenModal(false)}>Close</Button>
                                <Button 
                                onClick = {handleBid} 
                                type = "submit" className= "add">Add Bid</Button>
                                </div>
                                
                           
                        </Modal>
                    
                </div>
                <div className = "post_bid">
                    {
                        getBid.map(({id, bids}) =>(
                            <p
                            key = {id}
                            style = {{position: "relative",
                            paddingBottom:"5px"}}>
                            {
                                Id === bids.questionId ? (
                                <span>
                                    {bids.bid}
                                
                                <br/>
                                <span
                                    style = {{
                                        position: "absolute",
                                        color: "grey",
                                        fontSize:"small",
                                        display:"flex",
                                        right: "0px"
                                    }}
                                >
                                            <span style = {{color:"#b92b27"}}>
                                                {bids.user.displayName
                                                ? bids.user.displayName
                                                :bids.user.email }  {" "}
                                                on  {" "}
                                                {new Date(bids.timestamp?.toDate()).toLocaleDateString()}
                                            </span>
                                            </span>
                                </span>
                                
                            )  : (
                                ""
                            )}
                            </p>
                        ))}
                </div>
                <div className="post_footerLeft">
                    <ShareOutlinedIcon />
                </div>
            </div>
        
    );
}

export default Post;
