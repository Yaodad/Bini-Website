import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header, Footer, PreLoader } from './sections';
import { biniLogoFlower, biniLogoText } from './assets/images';

function App() {
  const [loading, setLoading] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [dropDelay, setDropDelay] = useState(false);

  useEffect(() => {
    setLoading(true);
    setShowMain(false);
    setDropDelay(false);
    document.body.classList.add('overflow-hidden');

    setTimeout(() => {
      setDropDelay(true);
    }, 350);

    setTimeout(() => {
      setShowMain(true);
    }, 2500);

    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('overflow-hidden');
    }, 3500);
  }, []);
  return (
    <>
      <PreLoader
        loading={loading}
        dropDelay={dropDelay}
        biniLogoFlower={biniLogoFlower}
        biniLogoText={biniLogoText}
      />
      {/* <main
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
            <img src="/bini-logo-flower.png" alt="bini-logo-flower" />
          </div>
          <div className="w-[220px] sm:w-[240px]">
            <img
              src="/bini-logo-text.png"
              alt="bini-logo-flower"
              className="mx-auto"
            />
          </div>
        </div>
      </main> */}
      {showMain && (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
