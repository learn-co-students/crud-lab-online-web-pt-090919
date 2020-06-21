import cuid from 'cuid';
export const cuidFn = cuid;

const initialState = {
     restaurants: []
}

export default function manageRestaurants(state = initialState, action) {
     switch (action.type) {
          case 'ADD_RESTAURANT':
               return {
                    ...state,
                    restaurants: [...state.restaurants, action.payload]
               }
          default:
               return state
     }
}

export const addRestaurant = (id, text) => {
     return {
          type: 'ADD_RESTAURANT',
          payload: {
               id,
               text
          }
     }
}
