export const Button = ({ children, onClick, variation }) => {
  return (
    <button
      className={`${variation === "black"? "bg-black" : "bg-socket-theme"} text-white px-12 py-3 rounded-[4px]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
