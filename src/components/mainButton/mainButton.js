import './mainButton.css';

export const MainButton = props => {
  return (
    <button className="main__button" type="submit">
      {props.children}
    </button>
  );
};
