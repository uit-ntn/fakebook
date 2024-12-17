import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import news from "../assets/news.png";
import friend from "../assets/friends.png";
import group from "../assets/group.png";
import marketplace from "../assets/marketplace.png";
import watch from "../assets/watch.png";
import "../styles/LeftSideBar.css";

const LeftSidebar = () => {
    return (
        <Box className="left-sidebar" p={2}>
            <Box className="imp-links" display="flex" flexDirection="column" gap={2}>
                <Link href="#" display="flex" alignItems="center" color="inherit">
                    <Avatar src={news} alt="Latest news" sx={{ width: 32, height: 32, mr: 1 }} />
                    <Typography variant="body2">Latest news</Typography>
                </Link>
                <Link href="#" display="flex" alignItems="center" color="inherit">
                    <Avatar src={friend} alt="Friends" sx={{ width: 32, height: 32, mr: 1 }} />
                    <Typography variant="body2">Friends</Typography>
                </Link>
                <Link href="#" display="flex" alignItems="center" color="inherit">
                    <Avatar src={group} alt="Groups" sx={{ width: 32, height: 32, mr: 1 }} />
                    <Typography variant="body2">Groups</Typography>
                </Link>
                <Link href="#" display="flex" alignItems="center" color="inherit">
                    <Avatar src={marketplace} alt="Marketplace" sx={{ width: 32, height: 32, mr: 1 }} />
                    <Typography variant="body2">Marketplace</Typography>
                </Link>
                <Link href="#" display="flex" alignItems="center" color="inherit">
                    <Avatar src={watch} alt="Watch" sx={{ width: 32, height: 32, mr: 1 }} />
                    <Typography variant="body2">Watch</Typography>
                </Link>
                <Link href="#" color="inherit" variant="body2">
                    See More
                </Link>
            </Box>
        </Box>
    );
};

export default LeftSidebar;
