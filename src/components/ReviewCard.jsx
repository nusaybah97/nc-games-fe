const ReviewCard = ({review}) => {
    return (
        <li className="reviewCard">
            <h3>{review.title}</h3>
            <img className="reviewImg" src={review.review_img_url} alt="" />
            <button>Votes: {review.votes}</button>
            <p>Comments: {review.comment_count}</p>
        </li>
    )
}

export default ReviewCard