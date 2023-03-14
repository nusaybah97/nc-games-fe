const CommentCard = ({comment}) => {
    return <li className="commentCard">
        <p className="username">{comment.author}</p>
        <p>{comment.body}</p>
        <p className="date">Date added: {comment.created_at.substr(0, 10).split('-').reverse().join('-')}</p>
    </li> 
}

export default CommentCard