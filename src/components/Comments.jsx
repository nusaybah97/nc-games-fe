import { useState, useEffect } from 'react';
import { getComments } from '../api';
import {useParams} from 'react-router-dom'
import CommentCard from './CommentCard';

const Comments = () => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const {review_id} = useParams()

    useEffect(() => {
        setIsLoading(true)
        getComments(review_id)
        .then((comments) => {
            setComments(comments)
            setIsLoading(false)
        })
    }, [review_id])

    return isLoading ? (
        <h2 className='loading'>Loading...</h2>
    ) : (
        <section>
            <h3 className='commentsHeading'>Comments</h3>
            <ul className='commentsList'>
                {comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} comment={comment}/>
                })}
            </ul>
        </section>
    )
}

export default Comments;