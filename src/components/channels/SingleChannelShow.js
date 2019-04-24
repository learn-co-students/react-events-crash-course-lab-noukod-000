import React, {Component} from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
// import PropsRoute from './PropsRoute';
// import {Route} from 'react-router-dom';
import { getOneChannel } from '../../actions/channelActions';
import Channel from './Channel';

class SingleChannelShow extends Component {
    componentWillMount() {
    //    debugger
        this.props.getOneChannel(this.props.match.params.id);
       
    }
    render() { 
        
    let { channel } = this.props;
       if (channel === null) return null;

       const { match } = this.props;
       const channelId = match.params.id;
        channel = channel.find(e => e.id === Number(channelId ));

       if (!this.props.getOneChannel) {  
           return <div>Channel is loading ...</div>
       }
        return(
            <div className="container">
               <Channel channel={channel} />
            </div>
        );   
    }
}

function mapStateToProps(state) {
    return { channel: state.channel.channels};
}
export default connect(mapStateToProps, {getOneChannel})(SingleChannelShow); 