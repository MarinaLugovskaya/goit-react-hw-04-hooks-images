import PropTypes from "prop-types";
import css from "../Button/Button.module.css";

function Button({ onClick }) {
  return (
    <button type="button" className={css.button} onClick={onClick}>
      Load More
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
