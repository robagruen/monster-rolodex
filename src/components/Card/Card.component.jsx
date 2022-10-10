import { Component } from 'react';

import './card.styles.css';

class Card extends Component {
	render() {
		const { monsterID, monsterName, monsterEmail } = this.props;

		return (		
      <div className="card" key={ monsterID }>
        <img src={`http://robohash.org/${ monsterID }?set=set2&size=180x180`} alt={ monsterName } />
        <h2>{ monsterName }</h2>
        <p>{ monsterEmail }</p>
      </div>
    )
	}
}

export default Card;