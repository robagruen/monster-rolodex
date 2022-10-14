import './card.styles.css';

const Card = ({ monster }) => (
  <div className="card">
    <img src={`http://robohash.org/${ monster.id }?set=set2&size=180x180`} alt={ monster.name } />
    <h2>{ monster.name }</h2>
    <p>{ monster.email }</p>
  </div>
);

export default Card;