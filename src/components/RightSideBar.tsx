import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import advertisement from "../assets/advertisement.png";
import member_1 from "../assets/member-1.png";
import member_2 from "../assets/member-2.png";
import member_3 from "../assets/member-3.png";
import member_4 from "../assets/member-4.png";
import "../styles/RightSideBar.css";

const RightSideBar = () => {
    return (
        <Box className="right-sidebar">
            <img src={advertisement} className="sidebar-ads" alt="advertisement" />
            
            <Box className="sidebar-title">
                <Typography variant="h4">Conversation</Typography>
            </Box>
            
            <Box className="online-list">
                <Box className="online">
                    <Avatar src={member_1} alt="Alison Mina" />
                </Box>
                <Typography variant="body2">Alison Mina</Typography>
            </Box>
            
            <Box className="online-list">
                <Box className="online">
                    <Avatar src={member_2} alt="Jackson Aston" />
                </Box>
                <Typography variant="body2">Jackson Aston</Typography>
            </Box>
            
            <Box className="online-list">
                <Box className="online">
                    <Avatar src={member_3} alt="Samona Rose" />
                </Box>
                <Typography variant="body2">Samona Rose</Typography>
            </Box>
        </Box>
    );
};

export default RightSideBar;
