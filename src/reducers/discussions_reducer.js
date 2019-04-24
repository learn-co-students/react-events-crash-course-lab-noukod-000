import { GET_DISCUSSIONS, GET_DISCUSSION} from '../actions/types';

export default function(state = INITIAL_STATE , action) {

    switch (action.type) {
       case GET_DISCUSSIONS:
                return {
                ...state,
                discussions: action.payload
                };

            case GET_DISCUSSION:
                return {
                ...state,
                discussion: action.payload
                }; 

    
    default:
        return state;
    }
}
 


  
const INITIAL_STATE = { discussions: [], discussion: [] };




  
  
  
  