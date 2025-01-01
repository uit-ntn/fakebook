import advertisement from "../assets/advertisement.png"
import member_1 from "../assets/member-1.png"
import member_2 from "../assets/member-2.png"
import member_3 from "../assets/member-3.png"
import member_4 from "../assets/member-4.png"
import { Box, Typography } from "@mui/material"
import "../styles/RightSideBar.css"

const RightSideBar = () => {
    return (
        <Box className="right-sidebar">
            <img src={advertisement} className="sidebar-ads" />
            <Box className="sidebar-title">
                <Typography variant="h4">Conversation</Typography>
            </Box>
            <Box className="online-list">
                <Box className="online">
                    <img src={member_1} />
                </Box>
                <Typography>Alison Mina</Typography>
            </Box>
            <Box className="online-list">
                <Box className="online">
                    <img src={member_2} />
                </Box>
                <Typography>Jackson Aston</Typography>
            </Box>
            <Box className="online-list">
                <Box className="online">
                    <img src={member_3} />
                </Box>
                <Typography>Samona Rose</Typography>
            </Box>
        </Box>
    )
}

export default RightSideBar;
