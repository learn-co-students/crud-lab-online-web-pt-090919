
import cuid from 'cuid';
// export const cuidFn = cuid;

export default function manageReviews(state = {restaurants: []}, action) {
    switch (action.type) {
        case 'ADD_REVIEW':
            let newState = {
                ...state, restaurants: [
                    ...state.restaurants,
                    {id: cuid(), text: action.text}
                ]
            }
            return newState
    
        case 'DELETE_REVIEW':
            console.log(action)
            return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
        
        default:
          return state;
      }
}