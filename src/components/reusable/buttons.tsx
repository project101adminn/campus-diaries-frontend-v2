import { ButtonProps } from "../../types";
const Button = (props: ButtonProps) => {
  const { text, onClick, className, disabled } = props;
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  className:
    'px-4 py-2 mr-2 bg-gradient-to-r from-purple-500 to-purple-700 shadow rounded-lg text-white font-medium text-base tracking-wider hover:to-purple-800 transition duration-300 w-32',
  disabled: false,
};

export default Button;
