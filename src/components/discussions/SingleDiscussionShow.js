import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {getDiscussion} from '..actions/discussionActions';
import PropTypes from 'prop-types';
// import PropsRoute from './PropsRoute';
// import {Route} from 'react-router-dom';
import { getDiscussion } from '../../actions/discussionActions';
import Discussion from './Discussion';

class SingleDiscussionShow extends Component {
    componentWillMount() {
    //    debugger
        this.props.getDiscussion(this.props.match.params.id);
       
    }
    render() { 
        
    let { discussion } = this.props;
       if (discussion === null) return null;

       const { match } = this.props;
       const discussiontId = match.params.id;
        discussion = discussion.find(e => e.id === Number(discussiontId ));

       if (!this.props.getDiscussion) {  
           return <div> Discussion is loading ...</div>
       }
        return(
            <div className="container">
               <Discussion discussion={discussion} />
            </div>
        );   
    }
}

function mapStateToProps(state) {
    return { discussion: state.discussion.discussions};
}
export default connect(mapStateToProps, {getDiscussion})(SingleDiscussionShow); 