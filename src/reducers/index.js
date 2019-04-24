import { combineReducers } from 'redux';
import discussionReducer from './discussions_reducer';
import channelReducer from './channels_reducer';


const allReducers = combineReducers({
  discussion: discussionReducer,
  channel: channelReducer 
});

export default allReducers;