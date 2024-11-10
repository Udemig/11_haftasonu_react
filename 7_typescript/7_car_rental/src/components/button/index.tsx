interface Props {
  title: string;
  type?: "submit" | "button";
  designs?: string;
  disabled?: boolean;
  icon?: string;
  handleClick?: () => void;
}

const Button = ({
  title,
  type,
  designs,
  disabled,
  icon,
  handleClick,
}: Props) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`custom-btn bg-primary-blue rounded-full hover:bg-blue-800 transition ${designs}`}
      type={type}
    >
      <span className="flex-1">{title}</span>

      {icon && <img src={icon} className="size-6" />}
    </button>
  );
};

export default Button;
