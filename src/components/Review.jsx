import { useEffect, useState } from "react"
import { getReview } from "../api"
import {useParams} from 'react-router-dom'; 


const Review = () => {
    const [review, setReview] = useState({})
    const {review_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getReview(review_id)
        .then((review) => {
            setReview(review)
            setIsLoading(false)
        })
    }, [review_id])

    return isLoading ? (
        <h2 className="loading">Loading...</h2>
    ) : (
        <section className='singleReview'>
            <h3 className='reviewTitle'>{review.title}</h3>
            <img className='reviewImg'src={review.review_img_url} alt={review.title} />
            <p>Designed by {review.designer}</p>
            <h3>Review</h3>
            <p>{review.review_body}</p>
            <br />
            <p>{review.votes} Votes</p>
            <p>{review.comment_count} Comments</p>
            
        </section>
    )
}

export default Review