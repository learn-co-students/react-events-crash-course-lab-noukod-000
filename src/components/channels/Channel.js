import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Discussion from '../discussions/Discussion';
import PropTypes from 'prop-types';


// const Discussion = ({ discussion }) => (

//   renderChannels() {
//     const { channel } = this.props;
   
//       return(
//         <ChannelList channel={channel} />
    
//     )}
  
//       renderDiscussions() {
//       return this.props.discussions.map((discussion) => {
//       return(
//         <li key={discussion.id}>
       
//          <h4> {discussion.title}</h4>
 
//         <h4> {discussion.content}</h4>
       
//         </li>
//       )}
//      );
//   }

// );


const Channel = ({ channel}) => (
  <div>
    <h3>
    {channel.channel}
    {channel.channel.discussions}
    </h3>
   
      
  {/* <h2>
    {discussion.title}
  </h2>
  <p>
    {discussion.content}
  </p> */}
    
  </div>

  
);


Channel.propTypes = {
  channel: PropTypes.object.isRequired,
};

Channel.defaultProps = {
  channel: undefined,
};

export default Channel;