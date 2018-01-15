import React from 'react';

class ListingsForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      movieName: '',
      ageRating: '',
      movieTime: ''
    };

    this.handleMovieNameChange = this.handleMovieNameChange.bind(this);
    this.handleAgeRatingChange = this.handleAgeRatingChange.bind(this);
    this.handleMovieTimeChange = this.handleMovieTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  };

  handleMovieNameChange(event) {
    this.setState({movieName: event.target.value});
  };

  handleAgeRatingChange(event) {
    this.setState({ageRating: event.target.value});
  };

  handleMovieTimeChange(event) {
    this.setState({movieTime: event.target.value});
  };

  handleSubmit(event) {
    event.preventDefault();

    const movieName = this.state.movieName.trim();
    const ageRating = this.state.ageRating.trim();
    const movieTime = this.state.movieTime.trim();

    if(!movieName || !ageRating || !movieTime) return;

    this.props.handleListingSubmit({id: Date.now(), movieName: movieName, ageRating: ageRating, movieTime: movieTime});

    this.setState({movieName: '', ageRating: '', movieTime: ''})
  }

  render() {
    return(
      <form className="listings-form" onSubmit={this.handleSubmit}>
        <input type="text"
          placeholder="Movie Name"
          value={this.state.movieName}
          onChange={this.handleMovieNameChange}/>
        <input type="text"
          placeholder="Age Rating"
          value={this.state.ageRating}
          onChange={this.handleAgeRatingChange}/>
        <input type="text"
          placeholder="Movie Time"
          value={this.state.movieTime}
          onChange={this.handleMovieTimeChange}/>

        <input type="submit" value="Submit"/>


      </form>
    );
  };
};

export default ListingsForm;
