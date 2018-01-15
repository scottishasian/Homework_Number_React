import React from 'react';
import ListingsList from './ListingsList';

class ListingsBox extends React.Component {
  // constructor(props){
  //   super(props);
  // };

  render() {
    return(
      <div className='listings-box'>
        <h1>Movies</h1>
        <ListingsList />
      </div>
    );
  }


}

export default ListingsBox;
