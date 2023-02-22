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
    'px-6 py-3 mr-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-lg rounded-lg text-white font-medium text-base tracking-wider hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 transition duration-300',
  disabled: false,
};

export default Button;
