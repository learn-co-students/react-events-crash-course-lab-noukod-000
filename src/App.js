import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Discussions from './components/discussions/Discussions';
import SingleDiscussionShow from './components/discussions/SingleDiscussionShow';
import SingleChannelShow from './components/channels/SingleChannelShow';
import ChannelList from './components/channels/ChannelList';
// import NewDiscussion from './components/discussions/NewDiscussion';
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <h2>Discussion Forums</h2>
          <div className="container">
            <Switch>
              <Route exact path="/discussions" component={Discussions} />
              {/* <Route exact path={`/:title"`} component={SingleDiscussionShow} /> */}
              <Route exact path={`/discussions/:id`} component={SingleDiscussionShow} />
              <Route exact path="/channels" component={ChannelList} />
              <Route exact path={`/channels/:id`} component={SingleChannelShow} />
             
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
    );
  }
}


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       discussions: [],
//       isLoaded: false,
//     }
//   }

//   componentDidMount(){
    
//   //   fetch('http://localhost:3000/discussions')
//   //   .then(res => res.json())
//   //   .then(json => {
//   //     this.setState({
//   //       isLoaded: true,
//   //       discussions: json,
//   //     })
//   //   })
//   // }
     
//   let currentComponent = this;
   
//   const allDiscussionsApi = 'http://localhost:3000/discussions';
//   fetch(allDiscussionsApi)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       console.log(response);
//       currentComponent.setState({
//         post: response
//       })
//     })

// }
//   render() {
//     var { isLoaded, discussions } =  this.state;
//     if (!isLoaded) {
//       return <div> Loading...</div>
//     }
//     else {
//       return (
//           <div className="App">
//             <ul>
//               {discussions.map(discussion =>(
//                 <li key={discussion.id}> 
//                  Discussion:  {discussion.title}
//                 </li>
//               ))}
//             </ul>
            
//           </div>
    
//       );
//     }
//   }
// }
export default App;






