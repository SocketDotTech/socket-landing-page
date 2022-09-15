export const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-socket-theme text-white px-12 py-3 rounded-[4px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
