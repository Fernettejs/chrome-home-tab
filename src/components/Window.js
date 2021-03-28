import PropTypes from "prop-types";

const Window = ({ backgroundColor, text, onClick }) => {
  return (
    <div>
      <a href="https://fernettejs.github.io/">
        <button
        //   ADD ON CLICK FUNTION FOR THIS --> onClick={onClick}
          style={{
            backgroundColor: {backgroundColor},
            height: "132px",
            width: "132px",
            borderRadius: "10px",
            margin: "10px",
          }}
        >
          {text}
        </button>
      </a>
    </div>
  );
};

Window.defaultProps = {
  backgroundColor: "red",
};

Window.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Window;
