import { GET_CHANNELS, GET_CHANNEL } from '../actions/types';
export default function(state = INITIAL_STATE , action) {

    switch (action.type) {
       case GET_CHANNELS:
            return {
               ...state,
               channels: action.payload
                };

        case GET_CHANNEL:
            return {
              ...state,
              channel: action.payload
            }; 
                
    
    default:
        return state;
    }
}
 



const INITIAL_STATE = { channels: [], channel: [] };