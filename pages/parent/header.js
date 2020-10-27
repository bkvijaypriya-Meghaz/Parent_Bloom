import React, { useEffect, useState } from 'react'
import { FiLock ,FiUser} from 'react-icons/fi'
import { FiLogOut } from 'react-icons/fi'
import { FiSettings } from 'react-icons/fi'


export default function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const settingsDisplay = () => {
        document.getElementById("notiDrop-1").classList.toggle("show");
        document.getElementById("notiDrop-2").classList.toggle("show");
        var x = document.getElementById("toggleDisplay1").getAttribute("aria-expanded");
        if (x == "true") {
            x = "false"
        } else {
            x = "true"
        }
        document.getElementById("toggleDisplay1").setAttribute("aria-expanded", x);
    }

    const chatboxDisplay = () => {
        document.getElementById("chatboxDisplay").classList.add("open");
    }

    const chatboxClose = () => {
        document.getElementById("chatboxDisplay").classList.remove("open");
    }

    return (
        <>
         {/* <div className="sticky-header-container"> */}
            <header className="navbar pcoded-header navbar-expand-lg navbar-light">

                <div className="m-header">
                    <a className="mobile-menu" id="mobile-collapse1" href="#!"><span></span></a>
                    <a href="dashboard" className="b-brand">
                        <img src="../assets/images/bloom-logo.png" className="bloomlogo" />
                        <span className="b-title bloomtitle">Bloom</span>
                    </a>
                </div>
                <a className="mobile-menu" id="mobile-header" href="#!">
                    <i className="feather icon-more-horizontal"></i>
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <a href="dashboard" className="b-brand">
                            <img src="../assets/images/bloom-logo.png" className="bloomlogo" />
                            <span className="b-title bloomtitle">Bloom</span>
                        </a>

                    </ul>
                    <ul className="navbar-nav ml-auto">

                        <li><a href="#!" className="displayChatbox" onClick={chatboxDisplay}><i className="icon feather icon-mail"></i></a></li>

                        <li>
                            <div className="dropdown drp-user" id="notiDrop-1">
                                <a href="#" className="dropdown-toggle" id="toggleDisplay1" onClick={settingsDisplay} data-target="#notiDrop-2" data-toggle="collapse" aria-expanded="false">
                                    <i className="icon feather"><FiSettings /></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right profile-notification " id="notiDrop-2">
                                    <div className="pro-head">
                                        <img src="../assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image" />
                                        <span>Ann Doe</span>
                                        <a href="sign-in" className="dud-logout" title="Logout">
                                            <i><FiLogOut /></i>
                                        </a>
                                    </div>
                                    <ul className="pro-body">
                                        <li>
                                            <a href="#!" className="dropdown-item disablecursoronly">
                                                <i><FiSettings /></i> Settings</a> 
                                                <i className="settinglockicon"><FiLock /></i>
                                        </li>
                                        <li>
                                            <a href="#!" className="dropdown-item disablecursoronly">
                                                <i><FiUser/></i> Profile</a>
                                                <i className="settinglockicon"><FiLock /></i>
                                        </li>
                                        <li>
                                            <a href="#!" className="dropdown-item disablecursoronly">
                                                <i className="feather icon-mail"></i> My Messages</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>



            <section className="header-chat header-user-list" id="chatboxDisplay">
                <div className="h-list-header">
                    <h6>Jane Doe</h6>
                    <a href="#!" className="h-back-user-list" onClick={chatboxClose}><i className="feather icon-chevron-left"></i></a>
                </div>
                <div className="h-list-body">
                    <div className="main-chat-cont scroll-div">
                        <div className="main-friend-chat">
                            <div className="media chat-messages">
                                <a className="media-left photo-table" href="#!"><img className="media-object img-radius img-radius m-t-5" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image" /></a>
                                <div className="media-body chat-menu-content">
                                    <div className="">
                                        <p className="chat-cont">Hi, Ms. Doe I had a question about the Chemistry Assignment.</p>
                                    </div>
                                    <p className="chat-time">8:20 a.m.</p>
                                </div>
                            </div>
                            <div className="media chat-messages">
                                <div className="media-body chat-menu-reply">
                                    <div className="">
                                        <p className="chat-cont">Hi Ann! What's your question?</p>
                                    </div>
                                    <p className="chat-time">8:22 a.m.</p>
                                </div>
                            </div>
                            <div className="media chat-messages">
                                <a className="media-left photo-table" href="#!"><img className="media-object img-radius img-radius m-t-5" src="../assets/images/user/avatar-1.jpg" alt="Generic placeholder image" /></a>
                                <div className="media-body chat-menu-content">
                                    <div className="">
                                        <p className="chat-cont">can you help me?</p>
                                    </div>
                                    <p className="chat-time">8:20 a.m.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-list-footer">
                    <div className="input-group">
                        <input type="file" className="chat-attach displayNoneStyle" />
                        <a href="#!" className="input-group-prepend btn btn-success btn-attach">
                            <i className="feather icon-paperclip"></i>
                        </a>
                        <input type="text" name="h-chat-text" className="form-control h-send-chat" placeholder="Write hear . . " />
                        <button type="submit" className="input-group-append btn-send btn btn-primary">
                            <i className="feather icon-message-circle"></i>
                        </button>
                    </div>
                </div>
            </section>
         {/* </div> */}
        </>
    );
}
