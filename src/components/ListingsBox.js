import React from 'react';
import ListingsList from './ListingsList';
import ListingsForm from './ListingsForm';

class ListingsBox extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      listings: [
        {id: 1, movieName: 'The Disaster Artist', ageRating: '18', movieTime: '4:30'},
        {id: 2, movieName: 'Big Trouble in Little China', ageRating: '12', movieTime: '15:25'}
      ]
    }
  };

  render() {
    return(
      <div className='listings-box'>
        <h1>Movies</h1>
        <ListingsForm />
        <ListingsList listings={this.state.listings}/>
      </div>
    );
  }


}

export default ListingsBox;
