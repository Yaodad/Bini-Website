import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import { biniLogo } from '../assets/images';
import { FaFacebook, FaTiktok, FaSpotify, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill, RiTwitterXFill } from 'react-icons/ri';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Navbar tranparency
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleScreen = () => {
      if (window.screen.width >= 1280) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.body.classList.add('overflow-y-hidden');
      document.body.classList.add('bgBlur');
    } else {
      document.body.classList.remove('overflow-y-hidden');
      document.body.classList.remove('bgBlur');
    }

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScreen);

    // Remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScreen);
    };
  }, [showMenu]);

  return (
    <header className="menu fixed top-0 left-0 right-0 w-full text-white font-Roboto z-20">
      <div
        className={`relative flex justify-between items-center mt-4 mx-4 md:mx-10 rounded-[6.25rem] shadow-sm px-2 pl-5 md:pl-8 py-2 transition ease-in-out duration-300 ${
          scrollY > 50 || showMenu
            ? 'bg-primary'
            : 'bg-black/15 backdrop-blur-lg'
        }`}
      >
        <div className="flex xl:justify-start justify-center w-full items-center gap-14">
          {/* Logo */}
          <NavLink to={'/'} className="py-1">
            <img src={biniLogo} alt="logo" width={50} />
          </NavLink>

          {/* Desktop navbar */}
          <nav className="xl:block hidden">
            <ul className="flex space-x-5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.id}
                    className="text-white font-medium leading-6 text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile navbar */}
        <nav
          className={`flex flex-col justify-between absolute top-[4.375rem] right-0 max-w-[18rem] w-full bg-primary drop-shadow-lg transition-all duration-150 ease-in-out rounded-[1.563rem] xl:hidden ${
            showMenu
              ? 'h-[31.313rem] border-white pb-5'
              : 'h-0 border-none pt-0 overflow-hidden'
          }`}
        >
          <ul className="flex flex-col items-start justify-center px">
            {navLinks.map((link) => (
              <li
                className="text-2xl font-medium pl-5 py-3 border-b border-white/40 w-full"
                key={link.label}
              >
                <Link
                  to={link.id}
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                  className="w-full"
                >
                  <button className="text-accent w-full text-start">
                    {link.label}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex justify-center items-center space-x-5">
              <button className="cursor-pointer text-accent ">
                <Link
                  to="https://www.instagram.com/bini_ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <RiInstagramFill size={25} />
                  </i>
                </Link>
              </button>
              <button className="cursor-pointer text-accent ">
                <Link
                  to="https://web.facebook.com/BINIph.official/?_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaFacebook size={22} />
                  </i>
                </Link>
              </button>
              <button className="cursor-pointer text-accent ">
                <Link
                  to="https://www.tiktok.com/@bini_ph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaTiktok size={22} />
                  </i>
                </Link>
              </button>
              <button className="cursor-pointer text-accent ">
                <Link
                  to="https://open.spotify.com/artist/7tNO3vJC9zlHy2IJOx34ga"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaSpotify size={22} />
                  </i>
                </Link>
              </button>
              <button className="cursor-pointer text-accent ">
                <Link
                  to="https://x.com/BINI_ph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <RiTwitterXFill size={22} />
                  </i>
                </Link>
              </button>
              <button className="cursor-pointer text-accent ">
                <Link
                  to="https://www.youtube.com/channel/UCtOcDBKgyr-f50SgbMErFkQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaYoutube size={25} />
                  </i>
                </Link>
              </button>
            </div>
            <button>
              <Link
                to="https://fandom.abs-cbn.com/bini"
                target="_blank"
                className={
                  'flex justify-center items-center font-medium rounded-[6.25rem] p-2 px-6 text-nowrap bg-white hover:bg-transparent text-primary hover:text-white border-2 border-transparent hover:border-white transition ease-in-out duration-300'
                }
              >
                Exclusive Membership
              </Link>
            </button>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden xl:flex items-center space-x-3">
            <button className="cursor-pointer text-accent ">
              <Link
                to="https://www.instagram.com/bini_ph/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <RiInstagramFill size={23} />
                </i>
              </Link>
            </button>
            <button className="cursor-pointer text-accent ">
              <Link
                to="https://web.facebook.com/BINIph.official/?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FaFacebook size={20} />
                </i>
              </Link>
            </button>
            <button className="cursor-pointer text-accent ">
              <Link
                to="https://www.tiktok.com/@bini_ph"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FaTiktok size={20} />
                </i>
              </Link>
            </button>
            <button className="cursor-pointer text-accent ">
              <Link
                to="https://open.spotify.com/artist/7tNO3vJC9zlHy2IJOx34ga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FaSpotify size={20} />
                </i>
              </Link>
            </button>
            <button className="cursor-pointer text-accent ">
              <Link
                to="https://x.com/BINI_ph"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <RiTwitterXFill size={20} />
                </i>
              </Link>
            </button>
            <button className="cursor-pointer text-accent ">
              <Link
                to="https://www.youtube.com/channel/UCtOcDBKgyr-f50SgbMErFkQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FaYoutube size={23} />
                </i>
              </Link>
            </button>
          </div>

          <button className="xl:block hidden">
            <Link
              to="https://fandom.abs-cbn.com/bini"
              target="_blank"
              className={
                'flex gap-2 items-center font-medium rounded-[6.25rem] p-2 px-3 ml-5 text-nowrap bg-white hover:bg-transparent text-primary hover:text-white  border-2 border-transparent hover:border-white transition ease-in-out duration-300'
              }
            >
              Exclusive Membership
            </Link>
          </button>

          <button
            className="absolute top-2 right-3 rounded-[6.25rem] p-2 px-3 bg-white text-primary cursor-pointer text-accent xl:hidden block"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <i>
              {showMenu ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
