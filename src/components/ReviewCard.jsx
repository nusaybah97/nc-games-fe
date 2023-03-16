import {Link} from 'react-router-dom';
import { useState } from 'react';
import { updateVote} from '../api';

const ReviewCard = ({review}) => {

    const [incVote, setIncVote] = useState(0)
    const [decVote, setDecVote] = useState(0)
    const [plus, setPlus] = useState(null)
    const [minus, setMinus] = useState(null)
    const [isError, setIsError] = useState(false)

    const upVote = () => {
        if (incVote === 0) {
            setIsError(false)
            setIncVote(1)
            setDecVote(0)
            setPlus('plus')
            setMinus(null)
            updateVote(review.review_id, 1).catch(() => {
                setDecVote(0)
                setIncVote(0)
                setIsError(true)
                setMinus(null)
                setPlus(null)
            })
        }
        if (decVote === -1) {
            setIsError(false)
            setIncVote(1)
            setDecVote(0)
            setPlus('plus')
            setMinus(null)
            updateVote(review.review_id, 1).catch(() => {
                setDecVote(0)
                setIncVote(0)
                setIsError(true)
                setMinus(null)
                setPlus(null)
            })
        }
        if (incVote === 1) {
            setIsError(false)
            setIncVote(0)
            setDecVote(0)
            setPlus(null)
            setMinus(null)
            updateVote(review.review_id, -1).catch(() => {
                setDecVote(0)
                setIncVote(0)
                setIsError(true)
                setMinus(null)
                setPlus(null)
            })
        } 
    }

    const downVote = () => {
        if (decVote === 0) {
            setIsError(false)
            setDecVote(-1)
            setIncVote(0)
            setMinus('minus')
            setPlus(null)
            updateVote(review.review_id, -1).catch(() => {
                setDecVote(0)
                setIncVote(0)
                setIsError(true)
                setMinus(null)
                setPlus(null)
            })
        }
        if (incVote === 1) {
            setIsError(false)
            setDecVote(-1)
            setIncVote(0)
            setMinus('minus')
            setPlus(null)
            updateVote(review.review_id, -1).catch(() => {
                setDecVote(0)
                setIncVote(0)
                setIsError(true)
                setMinus(null)
                setPlus(null)
            })
        }
        if (decVote === -1) {
            setIsError(false)
            setDecVote(0)
            setIncVote(0)
            setMinus(null)
            setPlus(null)
            updateVote(review.review_id, 1).catch(() => {
                setDecVote(0)
                setIncVote(0)
                setIsError(true)
                setMinus(null)
                setPlus(null)
            })
        }
    }


    return (
        <li className="reviewCard">
            <Link className='cardTitle' to={`/reviews/${review.review_id}`} >
            <h3 className='reviewTitle'>{review.title}</h3>
            </Link>
            <img className="reviewImg" src={review.review_img_url} alt={review.title} />
            <p className='votes'>Votes: {review.votes + incVote + decVote}</p> 
            <button onClick={upVote} className='vote' id={plus} type='button'>+</button> 
            <button onClick={downVote} className='vote' id={minus} type='button'>-</button>
            {isError && <p className='votingError'>Something went wrong, please try again later!</p>}
            <p>Comments: {review.comment_count}</p>
        </li>
    )
}

export default ReviewCard
