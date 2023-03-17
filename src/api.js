import axios from "axios"

export const getReviews = (category, sortBy, orderBy) => {
   console.log(category, sortBy, orderBy)
   return axios
   .get(
    'https://games-oizc.onrender.com/api/reviews', {
      params: {
      category: category,
      sort_by: sortBy,
      order: orderBy
   }
    }
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

export const updateVote = (review_id, vote) => {
   return axios.patch(
      `https://games-oizc.onrender.com/api/reviews/${review_id}`, {
         inc_votes: vote
      }
   )
   .then(({data}) => {
      return data.review
   })
}

export const addComment = (review_id, username, body ) => {
   return axios.post(
      `https://games-oizc.onrender.com/api/reviews/${review_id}/comments`, {username: username, body: body}
   )
   .then(({data}) => {
      return data.comment
   })
}

export const getCategories = () => {
   return axios.get (
      `https://games-oizc.onrender.com/api/categories`
   )
   .then(({data}) =>{
      return data.categories
   })
}
