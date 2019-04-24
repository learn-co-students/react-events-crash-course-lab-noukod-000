import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Route,withRouter } from 'react-router-dom';
// import SingleDiscussionShow from './SingleDiscussionShow';
import { Link } from 'react-router-dom';
import { getDiscussions } from '../../actions/discussionActions';
import ChannelList from '../channels/ChannelList';


class Discussions extends Component {
  componentWillMount(){
    this.props.getDiscussions();
  }


  renderChannels() {
      const { channel } = this.props;
     
        return(
          <ChannelList channel={channel} />
      
      )}

        renderDiscussions() {
        return this.props.discussions.map((discussion) => {
        return(
          <li key={discussion.id}>
          <Link to ={`/discussions/${discussion.id}`}>
           <h4> {discussion.title}</h4>
          </Link>
          <h4> {discussion.content}</h4>
         
          </li>
        )}
       );
    }
  
  
  
  render() {
        
    return (
      <React.Fragment>
        <section className="discussionList">
          <h2>Events</h2>
          <ul>{this.renderDiscussions()}</ul>
        </section>
  
        <section className="eventList">
          <h2>Channels</h2>
          <ul>{this.renderChannels()}</ul>
        </section>
      </React.Fragment>
    );
  }
}


Discussions.propTypes = {
  discussions: PropTypes.array.isRequired,
  getDiscussions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  discussions: state.discussion.discussions
});

export default connect(mapStateToProps, { getDiscussions })(Discussions);








//   render() {
//       return this.props.discussions.map((discussion, ) => {
//       return(
       
//         <li key={discussion.id}>
//         <Link to ={`/discussions/${discussion.id}`}>
//          <h4> {discussion.title}</h4>
//         </Link>
//         <h4> {discussion.content}</h4>
       
//         </li>
        
        
//       )
      
//     }
   
//     );
//   }
// }
