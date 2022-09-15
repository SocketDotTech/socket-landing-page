export const Button = ({
  children,
  onClick,
  variation,
  bgColor = "bg-socket-theme",
  textColor = "text-white",
  type = "button",
  url,
  external = false,
}) => {
  const btnStyle = `${bgColor} ${textColor} px-7 py-[15px] rounded-[4px] font-bold text-lg leading-[22px]`;

  if (type === "link") {
    return (
      <a
        href={url}
        target={`${external ? "_blank" : ""}`}
        className={btnStyle}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <button className={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
};
