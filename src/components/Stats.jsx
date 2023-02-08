export const Stats = () => {
  return (
    <div className="pt-[4.5rem] pb-[3.875rem] pb- bg-white">
      <div className="socket-container mx-auto">
        <h2 className="heading-2 text-center">
          Trusted by the Best{" "}
          <span className="text-socket-theme">Wallets and dApps</span>
        </h2>
        <div className="lg:px-[4.375rem] flex flex-col md:flex-row justify-evenly overlay-bg pt-10 md:pt-14 pb-12 mt-[1.375rem] lg:mx-[4.625rem] gap-10 md:gap-0">
          <div>
            <Stat>
              <span className="text-socket-gray-40">$</span>2B$+
            </Stat>
            <StatLabel>Volume Transferred</StatLabel>
          </div>
          <div>
            <Stat>
              1.8<span className="text-socket-gray-40">M</span>+
            </Stat>
            <StatLabel>Total Transactions</StatLabel>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ children }) => {
  return (
    <p className="text-[4.5rem] md:text-[6rem] text-center font-black leading-[4.5rem] md:leading-[6rem]">
      {children}
    </p>
  );
};

const StatLabel = ({ children }) => {
  return (
    <p className="text-socket-gray-90 text-xl md:text-2xl font-extrabold text-center">
      {children}
    </p>
  );
};
