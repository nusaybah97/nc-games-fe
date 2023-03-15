import {Link} from 'react-router-dom';
import { useState } from 'react';
import { updateVote} from '../api';

const ReviewCard = ({review}) => {

    const [incVote, setIncVote] = useState(0)
    const [decVote, setDecVote] = useState(0)
    const [plus, setPlus] = useState(null)
    const [minus, setMinus] = useState(null)

    const upVote = () => {
        if (incVote === 0) {
            updateVote(review.review_id, 1)
            setIncVote(1)
            setDecVote(0)
            setPlus('plus')
            setMinus(null)
        }
        if (decVote === -1) {
            updateVote(review.review_id, 1)
            setIncVote(1)
            setDecVote(0)
            setPlus('plus')
            setMinus(null)
        }
        if (incVote === 1) {
            updateVote(review.review_id, -1)
            setIncVote(0)
            setDecVote(0)
            setPlus(null)
            setMinus(null)
        } 
    }

    const downVote = () => {
        if (decVote === 0) {
            updateVote(review.review_id, -1)
            setDecVote(-1)
            setIncVote(0)
            setMinus('minus')
            setPlus(null)
        }
        if (incVote === 1) {
            updateVote(review.review_id, -1)
            setDecVote(-1)
            setIncVote(0)
            setMinus('minus')
            setPlus(null)
        }
        if (decVote === -1) {
            updateVote(review.review_id, 1)
            setDecVote(0)
            setIncVote(0)
            setMinus(null)
            setPlus(null)
        }
    }


    return (
        <li className="reviewCard">
            <Link to={`/reviews/${review.review_id}`} >
            <h3 className='cardTitle'>{review.title}</h3>
            </Link>
            <img className="reviewImg" src={review.review_img_url} alt={review.title} />
            <p>Votes: {review.votes + incVote + decVote}</p> 
            <button onClick={upVote} className='vote' id={plus} type='button'>+</button> 
            <button onClick={downVote} className='Vote' id={minus} type='button'>-</button>
            <p>Comments: {review.comment_count}</p>
        </li>
    )
}

export default ReviewCard
