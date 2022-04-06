import Card from "../card/card.component";
import "./card-list.styles.css";

const Cardlist = ({ monsters, imgSet }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      const { name, email, id } = monster;
      return <Card name={name} email={email} id={id} key={id} imgSet={imgSet} />;
    })}
  </div>
);

export default Cardlist;
