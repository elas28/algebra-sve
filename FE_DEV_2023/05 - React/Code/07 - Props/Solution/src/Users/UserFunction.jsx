import PropTypes from "prop-types";

export default function UserFunction({ name, years, job }) {
  return (
    <p className="function-component">
      Pozdrav, moje ime je {name} i imam {years} godina.
      <br />
      Radim kao {job}
    </p>
  );
}

UserFunction.propTypes = {
  name: PropTypes.string.isRequired,
  years: PropTypes.number.isRequired,
  job: PropTypes.string,
};

UserFunction.defaultProps = {
  job: "Unemployed",
};
