import React from 'react';

class ListingsForm extends React.Component {
  render() {
    return(
      <form className="listings-form">
        <input type="text"
          placeholder="Movie Name"/>
        <input type="text"
          placeholder="Age Rating"/>
        <input type="text"
          placeholder="Show Time"/>

        <input type="submit"/>


      </form>
    )
  }
}

export default ListingsForm;
