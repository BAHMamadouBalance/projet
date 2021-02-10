import React from 'react';
import '.././style/App.css';
import Sample from '.././feed/sample.json';

var qq = Sample.entries.sort((a,b) => (a.title>b.title)?1:-1);
var filtre = qq.filter(element=>element.programType=="series");
var filtre2 = filtre.filter(element=>element.releaseYear >= 2010);
filtre2.length=21;


class Series extends React.Component {
  render(){
    return (
      <div>
        <div class="titre">
          <p>
            Popular Series
          </p>
        </div>
        <ul class="movie">{
          filtre2.map((s) => {
            return(
              <li>
                <img src={s.images.Poster_Art.url} height="120" width="120" />
                <h5>
                  {s.title}
                </h5>
              </li>
            );
          })
        }
        </ul>
      </div>
    )
  }
}

export default Series;
