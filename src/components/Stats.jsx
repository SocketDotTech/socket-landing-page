export const Stats = () => {
  return (
    <div className="pt-[4.5rem] pb-[3.875rem] pb- bg-white">
      <div className="container mx-auto">
        <h2 className="heading-2 text-center">
          Trusted by the Best{" "}
          <span className="text-socket-theme">Wallets and dApps</span>
        </h2>
        <div className="px-[4.375rem] flex justify-between overlay-bg pt-14 pb-12 mt-[1.375rem]">
          <div>
            <p className="text-[6rem] text-center font-black leading-[6rem]">
              <span className="text-socket-gray-40">$</span>600M
            </p>
            <p className="text-socket-gray-90 text-2xl font-extrabold text-center">
              Volume Transferred
            </p>
          </div>
          <div className="-ml-[15px]">
            <p className="text-[6rem] text-center font-black leading-[6rem]">
              500<span className="text-socket-gray-40">K</span>
            </p>
            <p className="text-socket-gray-90 text-2xl font-extrabold text-center">
              Total Transactions
            </p>
          </div>
          <div>
            <p className="text-[6rem] text-center font-black leading-[6rem]">12</p>
            <p className="text-socket-gray-90 text-2xl font-extrabold text-center">
              Chains Supported
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
