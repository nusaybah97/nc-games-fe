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