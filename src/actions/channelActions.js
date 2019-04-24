import { GET_CHANNELS, GET_CHANNEL } from '../actions/types';

const API_URL = 'http://localhost:3000';


export function getChannelList(){
    return (dispatch) => {
        dispatch({type: 'DATA_LOADING'})

        return fetch(`${API_URL}/channels`).then(res => res.json())
        .then(json =>{
         console.log(GET_CHANNELS,json)
            return dispatch({
                type: GET_CHANNELS,
                payload: json
              });
        }).catch(error => console.log(error));
    }
 
}

export function getOneChannel(id) {
    return (dispatch) => {
        dispatch({type: 'DATA_LOADING'})
  
    return fetch(`${API_URL}/channels/${id}`).then(res => res.json())
    .then(json=>{
        return dispatch({
            type: GET_CHANNEL,
            payload: json
            
          });
          
    }).catch(error => console.log(error));
      
    };
  }
