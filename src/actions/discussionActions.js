
import {GET_DISCUSSIONS, GET_DISCUSSION} from './types';
// import axios from 'axios';
    const API_URL = 'http://localhost:3000';


 export function getDiscussions(){
     return (dispatch) => {
         dispatch({type: 'DATA_LOADING'})

         return fetch(`${API_URL}/discussions`).then(res => res.json())
         .then(json =>{
          // console.log(json)
             return dispatch({
                 type: GET_DISCUSSIONS,
                 payload: json
               });
         }).catch(error => console.log(error));
     }
  
}


export function getDiscussion(id) {
  return (dispatch) => {
      dispatch({type: 'DATA_LOADING'})

  return fetch(`${API_URL}/discussions/${id}`).then(res => res.json())
  .then(json=>{
      return dispatch({
          type: GET_DISCUSSION,
          payload: json
          
        });
        
  }).catch(error => console.log(error));
    
  };
}




// export const getDiscussion = id => async dispatch => {
//     const res = await axios.get(`${API_URL}/discussions/${id}`);
//     console.log(res)
//     dispatch({
//       type: GET_DISCUSSION,
//       payload: res.json
//     });
//   };