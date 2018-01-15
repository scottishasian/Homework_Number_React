import React from 'react';

class Listing extends React.Component {

  render() {
    return(
      <div className="listing">
        <h4>{this.props.movieName}</h4>
        {this.props.children}
      </div>
    );
  }
}

export default Listing;
