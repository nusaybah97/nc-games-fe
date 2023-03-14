import {Link} from 'react-router-dom';

const ReviewCard = ({review}) => {
    return (
        <li className="reviewCard">
            <Link to={`/reviews/${review.review_id}`} >
            <h3 className='cardTitle'>{review.title}</h3>
            </Link>
            <img className="reviewImg" src={review.review_img_url} alt={review.title} />
            <button>Votes: {review.votes}</button>
            <p>Comments: {review.comment_count}</p>
        </li>
    )
}

export default ReviewCard
