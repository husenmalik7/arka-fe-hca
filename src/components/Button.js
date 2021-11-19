import "../styles/button.css";

const Button = (props) => {
  return (
    <div className="button-wrapper">
      <p onClick={props.action} className={`button type-${props.buttonType}`}>
        {props.buttonName}
      </p>
    </div>
  );
};

export default Button;
