import friend from "../assets/friends.png"
import group from "../assets/group.png"
import marketplace from "../assets/marketplace.png"
import news from "../assets/news.png"
import watch from "../assets/watch.png"
import "../styles/LeftSideBar.css"

const LeftSidebar = () => {
    return (
        <div className="left-sidebar">
            <div className="imp-links">
                <a href="#">
                    <img src={news} />
                    Latest news
                </a>
                <a href="#">
                    <img src={friend} />
                    Friends
                </a>
                <a href="#">
                    <img src={group} />
                    Groups
                </a>
                <a href="#">
                    <img src={marketplace} />
                    Marketplace
                </a>
                <a href="#">
                    <img src={watch} />
                    Watch
                </a>
                <a href="#">See More</a>
            </div>

        </div>
    )

}

export default LeftSidebar;