import { h } from 'preact';
import './card.css';
const Card = (props) => {
  return (
    <div class="card">
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.imageAlt} />
      <p>{props.descriptionTitle}</p>
      <p>{props.description}</p>
      <hr />
    </div>
  );
};

export default Card;
