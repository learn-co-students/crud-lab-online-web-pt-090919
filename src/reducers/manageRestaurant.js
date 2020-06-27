
import cuid from 'cuid';
// export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            let addedRest = {
                ...state, restaurants: [
                    ...state.restaurants,
                    {id: cuid(), text: action.text}
                ]
            }
            return addedRest
    
        case 'DELETE_RESTAURANT':
            let filtRest = state.restaurants.filter(restaurant => restaurant.id !== action.id)
            let filtRev = state.reviews.filter(review => review.restaurantId !== action.id)
            return {restaurants: filtRest, reviews: filtRev}
        
        case 'ADD_REVIEW':
            let addedRev = {
                ...state, reviews: [
                    ...state.reviews,
                    {id: cuid(), text: action.review.text, restaurantId: action.review.restaurantId}
                ]
            }
            return addedRev

        case 'DELETE_REVIEW':
            let delRev = {
                ...state, reviews: state.reviews.filter(review => review.id !== action.id)
            }
            return delRev

        default:
          return state;
      }
}
