import styles from "./Button.module.scss";

const Button = ({
  children,
  type = "submit",
  onClick,
  additionalClassName,
}) => {
  return (
    <button
      className={`${styles.btn} ${additionalClassName}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

