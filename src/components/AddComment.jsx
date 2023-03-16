import { useState } from "react"
import {addComment} from '../api'
import { useParams } from "react-router-dom"

const AddComment = ({setComments, setClicked}) => {
    const [user, setUser] = useState('')
    const [comment, setComment] = useState('')
    const {review_id} = useParams()

    const handleSubmit = (event) => {
        event.preventDefault();
        addComment(review_id, user, comment).then((newComment) => {
            setComments((currentComments) => {
                return [newComment, ...currentComments]
            })
        })
        setClicked(false)
        setComment('')
        setUser('')
    }


    return (

        <form className="commentForm" onSubmit={handleSubmit}>
        <section>
        <label className="commentLabel" htmlFor="username">Username:</label>
        <input required className="commentInput" type="text" id='username' value={user} onChange={(event) => {
            setUser(event.target.value)
        }} />
        </section>

        <section>
        <label className="commentLabel" htmlFor="comment">Comment:</label>
        <textarea required className="commentInput"  id="comment" value={comment} onChange={(event) => {
            setComment(event.target.value);
        }} ></textarea>
        </section>

        <button className="commentButton" type="submit">Add</button>
    </form>
)
}

export default AddComment