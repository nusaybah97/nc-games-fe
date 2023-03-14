import axios from "axios"

export const getReviews = () => {
   return axios
   .get(
    'https://games-oizc.onrender.com/api/reviews'
   )
   .then(({data}) => {
    return data.reviews
   })
}

export const getReview = (review_id) => {
   return axios.get(
      `https://games-oizc.onrender.com/api/reviews/${review_id}`
   )
   .then(({data}) => {
      return data.review;
   })
}

export const getComments = (review_id) => {
   return axios.get(
      `https://games-oizc.onrender.com/api/reviews/${review_id}/comments`
   )
   .then(({data}) => {
      return data.comments
   })
}