import PropTypes from "prop-types";
import Button from "./Button";

export default function Card({
  title = "Titulo",
  description = "Descripcion",
  img = "https://via.placeholder.com/150",
}) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Button text="Ver más" />
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
