import member_1 from "../assets/member-1.png"
import member_2 from "../assets/member-2.png"
import member_3 from "../assets/member-3.png"
import member_4 from "../assets/member-4.png"
import upload from "../assets/upload.png"
import "../styles/StoryItem.css"

const StoryItem = () => {
    return (
        <>
            <div className="story story1">
                <img src={upload} />
                <p>Post Story</p>
            </div>
            <div className="story story2">
                <img src={member_1} />
                <p>Alison</p>
            </div>
            <div className="story story3">
                <img src={member_2} />
                <p>Jackson</p>
            </div>
            <div className="story story4">
                <img src={member_3} />
                <p>Samona</p>
            </div>
            <div className="story story5">
                <img src={member_4} />
                <p>John</p>
            </div>
        </>
    )
}

export default StoryItem;