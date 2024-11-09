type Props = {
  children: String | JSX.Element;
};

// HOC
const Warning = ({ children }: Props) => {
  return <p className="home__error-container">{children}</p>;
};

export default Warning;
