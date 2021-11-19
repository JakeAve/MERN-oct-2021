import "./styles.css";

const ButtonGrande = (props) => {
  const { children } = props;
  return <button className="button-grande">{children}</button>;
};

export default ButtonGrande;
