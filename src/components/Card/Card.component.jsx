import { Component } from 'react';

import './card.styles.css';

class Card extends Component {
	render() {
		const { monster } = this.props;

		return (		
      <div className="card" key={ monster.id }>
        <img src={`http://robohash.org/${ monster.id }?set=set2&size=180x180`} alt={ monster.name } />
        <h2>{ monster.name }</h2>
        <p>{ monster.email }</p>
      </div>
    )
	}
}

export default Card;