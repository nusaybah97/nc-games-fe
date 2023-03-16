import { useState, useEffect } from 'react';
import { getComments } from '../api';
import {useParams} from 'react-router-dom'
import CommentCard from './CommentCard';
import AddComment from './AddComment';

const Comments = () => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const {review_id} = useParams()
    const [clicked, setClicked] = useState(false)
    const [isPosted, setIsPosted] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getComments(review_id)
        .then((comments) => {
            setComments(comments)
            setIsLoading(false)
        })
    }, [review_id])

    const handleClick = () => {
        if (!clicked) {
            setClicked(true)
            setIsPosted(false)
        }
        if (clicked) {
            setClicked(false)
            setIsPosted(false)
        }
    }

   
    return isLoading ? (
        <h2 className='loading'>Loading...</h2>
    ) : (
        <section>
            <h3 className='commentsHeading'>Comments</h3>
            <button type='button' className="addComment" onClick={handleClick}>Add a comment</button>
            {isPosted && <p>Your comment was added!</p>}
            {clicked && <AddComment setClicked={setClicked} setComments={setComments} setIsPosted={setIsPosted}/>}
            <ul className='commentsList'>
                {comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} comment={comment}/>
                })}
            </ul>
        </section>
    )
}

export default Comments;