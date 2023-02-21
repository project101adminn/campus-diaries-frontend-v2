// import button style from ./button.css
interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { text, onClick, className, disabled } = props;
  return (
    <button
      className={`px-6 py-3 mr-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-lg rounded-lg text-white font-medium text-base tracking-wider hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 transition duration-300 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
