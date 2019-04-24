import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
// import { connect } from 'react-redux';


const Discussion = ({ discussion }) => (
  <div>
    <h2>
      {discussion.title}
    </h2>
    <p>
      {discussion.content}
    </p>
    {/* <ul>
      
    </ul> */}
  </div>
);

Discussion.propTypes = {
  discussion: PropTypes.object.isRequired,
};

Discussion.defaultProps = {
  discussion: undefined,
};

export default Discussion;
