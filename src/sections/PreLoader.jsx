const PreLoader = ({ loading, dropDelay, biniLogoFlower, biniLogoText }) => {
  return (
    <main
      className={`fixed top-0 left-0 z-[100] bg-gradient-to-r from-purple-400 to-primary overflow-y-hidden w-screen h-screen flex justify-center items-center ${
        loading
          ? ''
          : 'invisible opacity-0 transition-all duration-1000 ease-in-out'
      }`}
    >
      <div className="relative">
        <div
          className={`absolute right-[-14px] sm:right-[-15px] w-[42px] sm:w-[44px] animate-slowSpin ${
            dropDelay
              ? 'top-[-50px] sm:top-[-55px] opacity-100 transition-all duration-500 ease-in-out'
              : 'top-[-999px] opacity-0'
          }`}
        >
          <img src={biniLogoFlower} alt="bini-logo-flower" />
        </div>
        <div className="w-[220px] sm:w-[240px]">
          <img src={biniLogoText} alt="bini-logo-textr" className="mx-auto" />
        </div>
      </div>
    </main>
  );
};

export default PreLoader;
