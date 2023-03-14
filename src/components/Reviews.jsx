import { useEffect, useState } from "react"
import { getReviews } from '../api.js'
import ReviewCard from '../components/ReviewCard'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        getReviews()
        .then((reviews) => {
            setReviews(reviews)
            setIsLoading(false)
        })
    },[])

    return isLoading ? (
        <h2 className="loading">Loading...</h2>
    ) : (
        <section>
            <h2 className="reviewsHeading">Reviews</h2>
            <ul className="reviewList">
             {reviews.map((review) => {
               return <ReviewCard key={review.review_id} review={review}/>
             })}
            </ul>
        </section>


    )
}

export default Reviews;