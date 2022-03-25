import React, { Component } from 'react';

class CastList extends Component {
  render() {
    return (
      <div>
        <h2>Cast List</h2>
        <p>{this.props.cast}</p>
      </div>
    );
  }
}

export default CastList;