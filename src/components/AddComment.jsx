import { useState } from "react"
import {addComment} from '../api'
import { useParams } from "react-router-dom"

const AddComment = ({setComments, setClicked, setIsPosted}) => {
    const [user, setUser] = useState('')
    const [comment, setComment] = useState('')
    const {review_id} = useParams()
    const [isError, setIsError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsPosted(false)
        setIsError(false)
        addComment(review_id, user, comment)
        .then((newComment) => {
            setIsPosted(true)
            setClicked(false)
            setComment('')
            setUser('')
            setComments((currentComments) => {
                return [newComment, ...currentComments]
            })
        })
        .catch((err) => {
            setIsError(true)
            setIsPosted(false)
            setClicked(true)
        })
    }


    return (

        <form className="commentForm" onSubmit={handleSubmit}>
        <section>
        <label className="commentLabel" htmlFor="username">Username:</label>
        <input required className="commentInput" type="text" id='username' value={user} onChange={(event) => {
            setUser(event.target.value)
        }} />
        {isError && <p className="usernameError">Please enter a valid username</p>}
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