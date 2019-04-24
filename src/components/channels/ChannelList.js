import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getChannelList } from '../../actions/channelActions';
// import Discussion from '../discusssions/Discussion';



class ChannelList extends Component {
  componentWillMount(){
    // debugger
    this.props.getChannelList();
  }

  renderChannels=(channels)=>{
    if(channels){
      return this.props.channels.map((chan)=>
      <Link to={`/channels/${chan.id}`}>
      {chan.channel}
      </Link>)
    }else{
      return "NO CHANNELS YET"
    } 
  }

  
   

  render() {
    // debugger
    const { channels }=this.props;
    return(
      <div>
        {this.renderChannels(channels)}    
      </div>
    )
    }
  }
  



const mapStateToProps = state => ({
  channels: state.channel.channels
});


export default connect(mapStateToProps, {getChannelList})(ChannelList);





