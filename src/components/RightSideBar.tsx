import advertisement from "../assets/advertisement.png"
import member_1 from "../assets/member-1.png"
import member_2 from "../assets/member-2.png"
import member_3 from "../assets/member-3.png"
import member_4 from "../assets/member-4.png"

import "../styles/RightSideBar.css"

const RightSideBar = () => {
    return (
        <div className="right-sidebar">
            <img src={advertisement} className="sidebar-ads" />
            <div className="sidebar-title">
                <h4>Conversation</h4>
            </div>
            <div className="online-list">
                <div className="online">
                    <img src={member_1} />
                </div>
                <p>Alison Mina</p>
            </div>
            <div className="online-list">
                <div className="online">
                    <img src={member_2} />
                </div>
                <p>Jackson Aston</p>
            </div>
            <div className="online-list">
                <div className="online">
                    <img src={member_3} />
                </div>
                <p>Samona Rose</p>
            </div>
        </div>
    )
}

export default RightSideBar;