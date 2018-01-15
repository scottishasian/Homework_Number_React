import React from 'react';
import ListingsList from './ListingsList';

class ListingsBox extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      listings: [
        {id: 1, movieName: 'The Disaster Artist', movieTime: '4:30'}
      ]
    }
  };

  render() {
    return(
      <div className='listings-box'>
        <h1>Movies</h1>
        <ListingsList listings={this.state.listings}/>
      </div>
    );
  }


}

export default ListingsBox;
