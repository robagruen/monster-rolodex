import { Component } from 'react';

import './card-list.styles.css';

import Card from './../Card/Card.component'

class CardList extends Component {
	render() {
		const { monsters } = this.props;

		return (
			<div className="card-list">
				{
					monsters.map((monster) => {
						return (
							<Card monsterID={ monster.id } monsterName={ monster.name } monsterEmail={ monster.email } />
						)
					})
				}
			</div>
		)
	}
}

export default CardList;