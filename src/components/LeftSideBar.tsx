import { Box } from "@mui/material"
import friend from "../assets/friends.png"
import group from "../assets/group.png"
import marketplace from "../assets/marketplace.png"
import news from "../assets/news.png"
import watch from "../assets/watch.png"
import "../styles/LeftSideBar.css"
import { Link } from "react-router-dom"

const LeftSidebar = () => {
    return (
        <Box className="left-sidebar">
            <Box className="imp-links">
                <Link to="#">
                    <img src={news} />
                    Latest news
                </Link>
                <Link to="#">
                    <img src={friend} />
                    Friends
                </Link>
                <Link to="#">
                    <img src={group} />
                    Groups
                </Link>
                <Link to="#">
                    <img src={marketplace} />
                    Marketplace
                </Link>
                <Link to="#">
                    <img src={watch} />
                    Watch
                </Link>
                <Link to="#">See More</Link>
            </Box>

        </Box>
    )

}

export default LeftSidebar;
