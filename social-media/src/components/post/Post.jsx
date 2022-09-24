import { MoreVert } from '@material-ui/icons'
import './post.css'
import { Users } from '../../dummyData'
import { useState } from 'react'

const Post = (post) => {
    let inidividualPost = post.post
    const [like, setLike] = useState(inidividualPost.like)
    const [heart, setHeart] = useState(inidividualPost.like - 1)
    const [isLiked, setIsLiked] = useState(false)
    const [isLoved, setIsLoved] = useState(false)
    const user = Users.filter(u => u.id === 1)
    console.log("user", user)
    console.log("post......", post.post)
    const onLikeClick = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    const onHeartClick = () => {
        setHeart(isLoved ? heart - 1 : heart + 1)
        setIsLoved(!isLoved)
    }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) => u.id === inidividualPost.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">
                            {Users.filter((u) => u.id === inidividualPost.userId)[0].username}
                        </span>
                        <span className="postDate">{inidividualPost.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{inidividualPost?.desc} </span>
                    <img src={inidividualPost.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" alt="" onClick={onLikeClick} className="likeIcon" />
                        <span className="postLikeCounter">{like} people likes it </span>
                        <img src="assets/heart.png" alt="" onClick={onHeartClick} className="likeIcon" />
                        <span className="postLikeCounter">{heart} people loves it </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{inidividualPost.comment} comments </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post