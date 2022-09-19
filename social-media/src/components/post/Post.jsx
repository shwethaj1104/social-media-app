import { MoreVert } from '@material-ui/icons'
import './post.css'

const Post = (post) => {
    console.log("post......",post.post)
    let inidividualPost = post.post
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">Shwetha</span>
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
                    <img src="assets/like.png" alt="" className="likeIcon" />
                    <img src="assets/heart.png" alt="" className="likeIcon" />
                    <span className="postLikeCounter">{inidividualPost.like} people likes it </span>
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