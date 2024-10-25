const MyButton = (props) => {
  const { buttonText } = props;
  return <button onClick={() => console.log(buttonText)}>{buttonText}</button>;
};

export default MyButton;
