import PropTypes from "prop-types";

export default function List({ items = [] }) {
  return (
    <ul className="my-4 bg-slate-600 text-white rounded-[25px] flex flex-col justify-center items-center gap-2">
      {items.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};
