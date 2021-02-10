import React from 'react';
import '.././style/App.css';

class Error extends React.Component {
  render(){
    return(
      <div>
        <div class="titre">
          <p>
            Popular Titles
          </p>
        </div>
        <p>
          Oops, something went wrong...
        </p>
      </div>

    );
  }
}

export default Error;
