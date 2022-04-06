import "./card.styles.css";

const Card = ({ name, email, id, imgSet }) => (
  <div className="card-container" key={id}>
    <img
      alt={`monster ${name}`}
      src={`https://robohash.org/${id}${name}${email}?set=set${imgSet}`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default Card;
