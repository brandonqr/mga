import React from 'react';
import '../Card/Card.css';
import { servicios } from '../../../server/data/servicios/data.servicios';

//const card = props => {};

class Card extends React.Component {
  render() {
    return (
      <div className="card-group">
        {servicios.map(servicio => {
          return (
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 project wow animated animated4 fadeInLeft">
              <div class="project-hover">
                <h2>TITLE</h2>

                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar ex
                  pulvinar est laoreet ullamcorper.
                </p>
                <a href="#">See Project</a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Card;
