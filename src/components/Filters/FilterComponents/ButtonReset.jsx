const ButtonReset = (props) => {
  return (
    <>
      <button onClick={props.onClick} className="reset-button">
        RESET
      </button>
    </>
  );
};

export default ButtonReset;
