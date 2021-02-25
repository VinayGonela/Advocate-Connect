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
                <ChatBubbleOutlineOutlinedIcon />
                <div className="post_footerLeft">
                    <ShareOutlinedIcon />
                </div>
            </div>
        </div>
    );
}

export default Post;
