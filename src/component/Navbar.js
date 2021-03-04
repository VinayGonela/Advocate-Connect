import React, { useState } from "react";
import HomeIcon from '@material-ui/icons/Home'
import NotificationOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined'
import {Avatar, Button,Input } from "@material-ui/core";
import CategoryIcon from '@material-ui/icons/Category';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import '../css/Navbar.css'
import { selectUser } from '../features/userSlice';
import {  useSelector } from 'react-redux';
import db, { auth } from '../firebase';
import Modal from "react-modal";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import firebase from 'firebase';
import SpecificationsCard from "./SpecificationsCard";
import Specifications from "./Specifications";

function Navbar() {
    
    const user = useSelector(selectUser)
    const[openModal, setOpenModal] = useState(false)
    const [input,setInput] = useState("")
    const[modalOpen, setModalOpen] = useState(false)
    const handleQuestion = (e) => {
        e.preventDefault()

        setOpenModal(false)
        setModalOpen(false)

        db.collection('questions').add({
            question: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user,
        })

        setInput("")
    }
    
    return (
        <div className = 'aHeader'>
            <div className = 'aHeader_logo'>
                <h1 className = 'line_1'>Advocate</h1>
                <h2 className = 'line_2'>Connect</h2>
                <img 
                src = ''
                alt = ''
                />
            </div>
                <div className = 'aHeader_icons'>
                  
                    <div className = 'aHeader_icon'>
                        <HomeIcon  />
                    </div>
                    
                    <div className = 'aHeader_icon'>
                        <CategoryIcon onClick={() => setModalOpen(true)}/>
                        <Modal
                        isOpen = {modalOpen}
                            onRequestClose = {() => setModalOpen(false)}
                            shouldCloseOnOverlayClick={true}
                            style = {{
                                overlay:{
                                width:700,
                                height:600,
                                backgroundColor:"rgba(0,0,0,8)",
                                zIndex: "1000",
                                top:"55%",
                                left:"45%",
                                marginTop: "-300px",
                                marginLeft:"-350px"
                            },
                                 }}
                            >
                            <div className = "modal_category">
                            <Specifications />

                            
                            </div>
                            <div className = "category_button">
                            <Button className = "cancel"onClick= {()=> setModalOpen(false)}>Close</Button>
                            </div>
                        </Modal>
                    </div>

                    <div className = 'aHeader_icon'>
                        <QuestionAnswerIcon onClick={() => setOpenModal(true)}/>
                    </div>

                    <div className = 'aHeader_icon'>
                        <NotificationOutlinedIcon />
                    </div>

                    <div className = 'aHeader_icon'>
                        <Avatar onClick = {() => auth.signOut()} src={user.photo} />
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
                            <div className = "modal_title">
                                <h5> Add Query / Issue</h5>
                                <div className = "modal_info">
                                    <Avatar className="avatar"
                                            src={user.photo}
                                    />
                                    <p>{user.displayName?user.displayName:user.email} , asked </p>
                                    <div className = "modal_scope">
                                        <PeopleOutlineIcon />
                                        <SpecificationsCard />
                                        
                                    </div>
                                </div>
                                <div className = "modal_field">
                                    <Input 
                                    required
                                    value = {input}
                                    onChange = {(e) => setInput(e.target.value)}
                                    type = "text"
                                    placeholder = "Enter Your Query/Issue here.."
                                    />
                                </div>
                                <div className = "modal_buttons">
                                <Button className = "cancel"onClick= {()=> setOpenModal(false)}>Close</Button>
                                <Button onClick= {handleQuestion}
                                type = "submit" className= "add">Add Query</Button>
                                </div>
                                
                            </div>
                        </Modal>
                    </div>
                </div>
            <div>

            </div>
        </div>
    )
}

export default Navbar
