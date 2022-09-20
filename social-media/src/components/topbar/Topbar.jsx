import { Chat, Notifications, Person, Search } from "@material-ui/icons"
import "./topbar.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const Topbar = () => {
    const [name,setName]=useState("Go To Profile")
    const [rounterLink,setRounterLink]=useState("/profile")
    const changeName=()=>{
        setName(name==="Go To Profile" ? "Go To Home" : "Go To Profile")
        setRounterLink(rounterLink==="/profile" ? "/" : "/profile")
    }

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Social Media</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friends, post or video.." className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">TimeLine</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="profile Image" className="topbarImg" />
                <Link onClick={changeName} className="goToProfile" to={rounterLink}>{name}</Link>
            </div>
        </div>
    )
}

export default Topbar