import React from 'react';
import Listing from './Listing.js'

class ListingsList extends React.Component {

  render() {
    console.log(this.props.listings);

    const listingNodes = this.props.listings.map(function(listing) {
      return (
        <Listing key={listing.id} movieName={listing.movieName}>
          <div id="ageRating">
            {listing.ageRating}
          </div>
          <div id="movieTime">
            {listing.movieTime}
          </div>
        </Listing>
      )
    })


    return(
      <div className="listings-list">
        {listingNodes}
      </div>
    );
  }
}

export default ListingsList;
